type ShowreelPlaceholderProps = {
  label: string;
};

export function ShowreelPlaceholder({ label }: ShowreelPlaceholderProps) {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-800 via-emerald-950 to-brand-ink ring-1 ring-brand-bone-faint">
      <div className="absolute inset-0 flex items-end p-6 lg:p-8">
        <button
          type="button"
          className="flex items-center gap-2 text-brand-bone text-xs tracking-[0.18em] font-medium uppercase"
        >
          <span className="grid place-items-center h-5 w-5 rounded-full border border-brand-bone">
            <svg viewBox="0 0 10 10" className="h-2 w-2 fill-brand-bone">
              <path d="M1 0v10l8-5z" />
            </svg>
          </span>
          {label}
        </button>
      </div>
    </div>
  );
}
