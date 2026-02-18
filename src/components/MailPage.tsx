"use client";

import { useState } from "react";
import Image from "next/image";
import { mailData, characterIcons } from "@/lib/data";

export default function MailPage() {
  const [selectedMailIndex, setSelectedMailIndex] = useState<number | null>(null);
  const [showImage, setShowImage] = useState(false);

  // 날짜 기준 내림차순 정렬
  const sortedMail = [...mailData].sort((a, b) => b.date.localeCompare(a.date));
  const selectedMail = selectedMailIndex !== null ? sortedMail[selectedMailIndex] : null;

  // 모바일에서 메일 선택
  const handleMailSelect = (index: number) => {
    setSelectedMailIndex(index);
  };

  // 모바일에서 목록으로 돌아가기
  const handleBack = () => {
    setSelectedMailIndex(null);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 geo-pattern opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 py-4 sm:py-8 animate-fade-in">
        {/* 페이지 헤더 - 모바일에서 상세 보기 시 숨김 */}
        <div className={`mb-4 sm:mb-6 flex items-center justify-between ${selectedMailIndex !== null ? "hidden lg:flex" : ""}`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[var(--text-muted)]">//</span>
            <h1 className="text-xl sm:text-2xl font-bold">메일함</h1>
          </div>
          <span className="text-xs sm:text-sm text-[var(--text-muted)]">{sortedMail.length}/200</span>
        </div>

        {/* 모바일: 뒤로가기 헤더 */}
        {selectedMailIndex !== null && (
          <div className="lg:hidden mb-4 flex items-center gap-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>목록으로</span>
            </button>
          </div>
        )}

        {/* 메일 레이아웃 */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* 좌측: 메일 목록 - 모바일에서 상세 보기 시 숨김 */}
          <div className={`lg:w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col ${selectedMailIndex !== null ? "hidden lg:flex" : ""}`}>
            <div className="hidden sm:flex items-center justify-between mb-4 px-2">
              <span className="text-sm text-[var(--text-secondary)]">받은 메일</span>
            </div>

            <div className="space-y-2 lg:max-h-[calc(100vh-250px)] overflow-y-auto pr-0 sm:pr-2">
              {sortedMail.map((mail, index) => (
                <button
                  key={`${mail.date}-${mail.character}`}
                  onClick={() => handleMailSelect(index)}
                  className={`w-full relative p-3 sm:p-4 rounded-lg transition-all duration-200 text-left flex items-center gap-3 sm:gap-4 box-border border-2 ${
                    selectedMailIndex === index
                      ? "bg-[var(--bg-card)] border-[#e5c74f]"
                      : "bg-[var(--bg-card)] border-transparent hover:border-[var(--accent-primary)]"
                  }`}
                >
                  {/* 캐릭터 아이콘 */}
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-[var(--border-primary)] flex-shrink-0">
                    <Image
                      src={characterIcons[mail.character] || ""}
                      alt={mail.character}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 메일 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-[var(--text-muted)]">•</span>
                      <h3 className="text-sm sm:text-base font-semibold truncate">{mail.title}</h3>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 sm:mt-1">
                      20{mail.date.substring(0, 2)}.{mail.date.substring(2, 4)}.{mail.date.substring(4, 6)}
                    </p>
                  </div>

                  {/* 수령 체크 */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[var(--text-muted)] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" className="sm:w-4 sm:h-4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 우측: 메일 내용 - PC에서는 항상 표시, 모바일에서는 선택 시에만 */}
          <div className={`flex-1 bg-[var(--bg-card)] rounded-lg border border-[var(--border-primary)] overflow-hidden ${selectedMailIndex === null ? "hidden lg:block" : ""}`}>
            {selectedMail ? (
              <div className="flex flex-col h-full">
                {/* 메일 헤더 */}
                <div className="p-4 sm:p-6 border-b border-[var(--border-primary)]">
                  <h2 className="text-lg sm:text-xl font-bold mb-1">{selectedMail.title}</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-[#e5c74f] text-sm sm:text-base font-semibold">{selectedMail.character}</span>
                    <span className="text-xs sm:text-sm text-[var(--text-muted)]">
                      20{selectedMail.date.substring(0, 2)}/{selectedMail.date.substring(2, 4)}/{selectedMail.date.substring(4, 6)}
                    </span>
                  </div>
                </div>

                {/* 메일 본문 */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <div className="whitespace-pre-wrap text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {selectedMail.content}
                  </div>
                </div>

                {/* PC: 스크린샷 보기 버튼 */}
                <div className="hidden sm:flex p-4 border-t border-[var(--border-primary)] justify-end">
                  <button
                    onClick={() => setShowImage(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors text-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>원본 스크린샷 보기</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex h-64 items-center justify-center text-[var(--text-muted)]">
                메일을 선택해주세요
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 이미지 모달 (PC) */}
      {showImage && selectedMail && (
        <div
          className="image-modal"
          onClick={() => setShowImage(false)}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors z-10"
            onClick={() => setShowImage(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Image
            src={selectedMail.file}
            alt={selectedMail.title}
            width={1200}
            height={800}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
