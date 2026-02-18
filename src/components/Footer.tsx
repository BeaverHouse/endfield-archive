export default function Footer() {
  return (
    <footer className="mt-auto py-4 sm:py-6 px-4 border-t border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-xs sm:text-sm text-[var(--text-muted)]">
        {/* 왼쪽: 아이콘 */}
        <div className="flex items-center gap-3 order-2 sm:order-1">
          <a
            href="https://github.com/BeaverHouse/endfield-archive"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:w-5 sm:h-5"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="mailto:haulrest@gmail.com"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="sm:w-5 sm:h-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        {/* 오른쪽: 저작권 정보 */}
        <div className="text-center sm:text-right order-1 sm:order-2">
          <p>Arknights: Endfield © HYPERGRYPH / Gryphline</p>
          <p className="mt-1">This is an unofficial, non-commercial fan site.</p>
          <p>All game content belongs to its respective owners and may be removed upon request.</p>
          <p className="mt-1 text-[var(--text-muted)]">2026, powered by Austin</p>
        </div>
      </div>
    </footer>
  );
}
