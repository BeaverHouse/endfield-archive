"use client";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-fade-in">
      {/* 히어로 섹션 */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Last Updated 26.02.18
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-warm)] bg-clip-text text-transparent">
              Endfield Archive
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            지나간 오퍼레이터의 편지와 특별한 순간들을 둘러보세요
          </p>
        </div>
      </section>

      {/* 섹션 카드 */}
      <section className="max-w-5xl mx-auto px-4 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* 우편함 카드 */}
          <button
            onClick={() => onNavigate("mail")}
            className="group relative p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 text-left glow-accent-hover border-gradient"
          >
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--bg-primary)] transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="sm:w-6 sm:h-6"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            <div className="mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm text-[var(--accent-primary)] font-medium">
                MAIL
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
              우편함
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              오퍼레이터들에게 받은 특별한 편지들
            </p>

            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors">
              <span>보러가기</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="sm:w-4 sm:h-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </button>

          {/* 이벤트 카드 */}
          <button
            onClick={() => onNavigate("event")}
            className="group relative p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--accent-warm)] transition-all duration-300 text-left"
          >
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--accent-warm)] group-hover:text-[var(--bg-primary)] transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="sm:w-6 sm:h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>

            <div className="mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm text-[var(--accent-warm)] font-medium">
                EVENT
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-[var(--accent-warm)] transition-colors">
              이벤트
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">특별한 순간들의 기록</p>

            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-warm)] transition-colors">
              <span>보러가기</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="sm:w-4 sm:h-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
