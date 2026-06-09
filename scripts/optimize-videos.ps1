<#
.SYNOPSIS
  Shrinks every site video and generates modern-codec + poster variants.

.DESCRIPTION
  Re-encodes each .mp4 under public/ to a much smaller H.264 file (in place),
  and writes a sibling VP9 .webm plus a .jpg poster frame next to it:

      public/landing/Foo.mp4   ->  optimized H.264 (overwrites; same path)
                                   public/landing/Foo.webm   (new)
                                   public/landing/Foo.jpg     (poster, new)

  Because the .mp4 keeps its path, the size win lands with NO code change.
  The .webm / .jpg are picked up by <LazyVideo webmSrc=... poster=... /> once
  you wire them (see notes at the bottom).

  Originals are backed up to public/_video_originals/ before the first encode,
  and a file is skipped if its backup already exists — so re-running is safe.

.PREREQUISITES
  ffmpeg on PATH.  Install:  winget install Gyan.FFmpeg   (then restart shell)

.USAGE
  pwsh ./scripts/optimize-videos.ps1                 # all videos under public/
  pwsh ./scripts/optimize-videos.ps1 -MaxWidth 960   # smaller cap (cards are small)
  pwsh ./scripts/optimize-videos.ps1 -Crf 32         # more compression (28-34 sane)
#>

param(
  [int]$MaxWidth = 1280,   # downscale cap; clips never render wider than this
  [int]$Crf      = 30,     # H.264 quality (lower = better/bigger; 28-32 typical)
  [int]$WebmCrf  = 34      # VP9 quality
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Error "ffmpeg not found on PATH. Install with:  winget install Gyan.FFmpeg  (then restart the shell)"
  exit 1
}

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
  $webm = Join-Path $dir "$base.webm"
  $jpg  = Join-Path $dir "$base.jpg"

  # 1) Optimized H.264 (audio stripped — every clip is muted; faststart for
  #    instant start; from the pristine backup, not the in-place file).
  ffmpeg -y -i $backup -vf $scale -c:v libx264 -preset slow -crf $Crf `
    -an -pix_fmt yuv420p -movflags +faststart $tmp
  Move-Item -Force $tmp $v.FullName

  # 2) VP9 WebM (smaller again on modern browsers).
  ffmpeg -y -i $backup -vf $scale -c:v libvpx-vp9 -b:v 0 -crf $WebmCrf `
    -an -row-mt 1 $webm

  # 3) Poster frame (first frame) for instant perceived paint.
  ffmpeg -y -ss 0 -i $backup -frames:v 1 -vf $scale -q:v 4 $jpg

  $before += (Get-Item $backup).Length
  $after  += (Get-Item $v.FullName).Length
}

if ($before -gt 0) {
  $b = [math]::Round($before / 1MB, 1)
  $a = [math]::Round($after  / 1MB, 1)
  $pct = [math]::Round(100 * (1 - $after / $before))
  Write-Host "`nMP4 total: $b MB -> $a MB  (-$pct%).  Originals in public/_video_originals/." -ForegroundColor Green
  Write-Host "Wire the new .webm / .jpg via LazyVideo's webmSrc / poster props (see SlideMedia + IndustryMedia)." -ForegroundColor Green
}
