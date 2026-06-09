<#
.SYNOPSIS
  Shrinks every site video and generates modern-codec + poster variants.

.DESCRIPTION
  Re-encodes each .mp4 under public/ to a much smaller H.264 file (in place),
  and writes a .jpg poster frame next to it:

      public/landing/Foo.mp4   ->  optimized H.264 (overwrites; same path)
                                   public/landing/Foo.jpg     (poster, new)

  Because the .mp4 keeps its path, the size win lands with NO code change; the
  poster is auto-picked-up by <LazyVideo /> (and wired on the hero).

  No WebM: on these short, already-compressed clips VP9 came out LARGER than
  the optimized H.264, so it would only hurt. H.264 + faststart is the win.

  Originals are backed up to public/_video_originals/ before the first encode,
  and a file is skipped if its backup already exists — so re-running is safe.

.PREREQUISITES
  ffmpeg (PATH, or any winget/choco/scoop install — the script auto-locates it).
  Install:  winget install Gyan.FFmpeg

.USAGE
  powershell -ExecutionPolicy Bypass -File .\scripts\optimize-videos.ps1
  ... -MaxWidth 960   # smaller cap (cards render small)
  ... -Crf 32         # more compression (28-32 sane)
#>

param(
  [int]$MaxWidth = 1280,   # downscale cap; clips never render wider than this
  [int]$Crf      = 30      # H.264 quality (lower = better/bigger; 28-32 typical)
)

$ErrorActionPreference = "Stop"

# Locate ffmpeg: prefer PATH, else fall back to the usual winget/choco/scoop
# install dirs (winget's FFmpeg package often doesn't refresh PATH).
function Resolve-Ffmpeg {
  $cmd = Get-Command ffmpeg -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $roots = @(
    (Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"),
    "C:\ProgramData\chocolatey\bin",
    (Join-Path $env:USERPROFILE "scoop\shims")
  )
  foreach ($r in $roots) {
    if (Test-Path $r) {
      $hit = Get-ChildItem -Path $r -Recurse -Filter ffmpeg.exe -ErrorAction SilentlyContinue |
        Select-Object -First 1
      if ($hit) { return $hit.FullName }
    }
  }
  return $null
}

$ffmpeg = Resolve-Ffmpeg
if (-not $ffmpeg) {
  Write-Error "ffmpeg not found. Install with:  winget install Gyan.FFmpeg  (then re-run this script)"
  exit 1
}
Write-Host "Using ffmpeg: $ffmpeg" -ForegroundColor DarkGray

$root      = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root "public"
$backupDir = Join-Path $publicDir "_video_originals"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# scale filter: cap width to $MaxWidth, keep aspect, force even dims (yuv420p).
$scale = "scale='min($MaxWidth,iw)':-2"

$videos = Get-ChildItem -Path $publicDir -Recurse -Filter *.mp4 |
  Where-Object { $_.FullName -notlike "*\_video_originals\*" }

$before = 0; $after = 0; $count = 0

foreach ($v in $videos) {
  $count++
  $rel    = $v.FullName.Substring($publicDir.Length).TrimStart('\','/')
  $backup = Join-Path $backupDir $rel
  New-Item -ItemType Directory -Force -Path (Split-Path $backup) | Out-Null

  if (Test-Path $backup) {
    Write-Host "skip (already optimized): $rel" -ForegroundColor DarkGray
    continue
  }

  Write-Host "`n[$count/$($videos.Count)] $rel" -ForegroundColor Cyan
  Copy-Item $v.FullName $backup   # preserve the original before overwriting

  $dir  = $v.DirectoryName
  $base = [System.IO.Path]::GetFileNameWithoutExtension($v.Name)
  $tmp  = Join-Path $dir "$base.opt.mp4"
  $jpg  = Join-Path $dir "$base.jpg"

  # 1) Optimized H.264 (audio stripped — every clip is muted; faststart for
  #    instant start; from the pristine backup, not the in-place file).
  & $ffmpeg -y -i $backup -vf $scale -c:v libx264 -preset slow -crf $Crf `
    -an -pix_fmt yuv420p -movflags +faststart $tmp
  Move-Item -Force $tmp $v.FullName

  # 2) Poster frame (first frame) for instant perceived paint.
  & $ffmpeg -y -ss 0 -i $backup -frames:v 1 -vf $scale -q:v 4 $jpg

  $before += (Get-Item $backup).Length
  $after  += (Get-Item $v.FullName).Length
}

if ($before -gt 0) {
  $b = [math]::Round($before / 1MB, 1)
  $a = [math]::Round($after  / 1MB, 1)
  $pct = [math]::Round(100 * (1 - $after / $before))
  Write-Host "`nMP4 total: $b MB -> $a MB  (-$pct%).  Originals in public/_video_originals/." -ForegroundColor Green
  Write-Host "Posters (.jpg) are auto-used by LazyVideo. Originals can be deleted once you've spot-checked playback." -ForegroundColor Green
}
