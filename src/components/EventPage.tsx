"use client";

import { useState } from "react";
import Image from "next/image";
import { eventData, characterIcons } from "@/lib/data";
import AudioPlayer from "./AudioPlayer";

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = Object.entries(eventData);
  const currentEvent = selectedEvent ? eventData[selectedEvent] : null;

  return (
    <div className="relative">
      <div className="absolute inset-0 geo-pattern opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 py-4 sm:py-8 animate-fade-in">
      {!selectedEvent ? (
        <>
          {/* 이벤트 목록 */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent-warm)] to-orange-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--bg-primary)] sm:w-5 sm:h-5">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">이벤트</h1>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">특별한 순간들의 기록</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {events.map(([eventId, event], index) => (
              <button
                key={eventId}
                onClick={() => setSelectedEvent(eventId)}
                className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--accent-warm)] transition-all duration-300 text-left animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 캐릭터 아이콘들 */}
                <div className="flex -space-x-2 sm:-space-x-3 mb-3 sm:mb-4">
                  {event.characters.slice(0, 5).map((char, i) => (
                    <div
                      key={char.name}
                      className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[var(--bg-card)]"
                      style={{ zIndex: 5 - i }}
                    >
                      <Image
                        src={characterIcons[char.name] || ""}
                        alt={char.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {event.characters.length > 5 && (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-tertiary)] border-2 border-[var(--bg-card)] flex items-center justify-center text-xs text-[var(--text-muted)]">
                      +{event.characters.length - 5}
                    </div>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[var(--accent-warm)] transition-colors">
                  {event.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  {event.characters.length}명의 오퍼레이터
                </p>

                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-warm)] transition-colors">
                  <span>자세히 보기</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* 이벤트 상세 */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => setSelectedEvent(null)}
              className="flex items-center gap-2 text-sm sm:text-base text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors mb-3 sm:mb-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>돌아가기</span>
            </button>

            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--accent-warm)]">
              {currentEvent?.name}
            </h1>
          </div>

          {/* BGM 플레이어 */}
          {currentEvent?.bgm && (
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--accent-warm)] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--bg-primary)] sm:w-4 sm:h-4">
                    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold">이벤트 BGM</span>
              </div>
              <AudioPlayer src={currentEvent.bgm} label="BGM" autoPlay defaultVolume={0.3} isBgm />
            </div>
          )}

          {/* 캐릭터 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {currentEvent?.characters.map((char, index) => (
              <div
                key={char.name}
                className="rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 캐릭터 헤더 */}
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-[var(--bg-tertiary)] border-b border-[var(--border-primary)]">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[var(--accent-primary)]">
                    <Image
                      src={characterIcons[char.name] || ""}
                      alt={char.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-bold">{char.name}</span>
                </div>

                {/* 캐릭터 이미지 */}
                {char.image && (
                  <button
                    onClick={() => setSelectedImage(char.image!)}
                    className="relative w-full aspect-[4/3] overflow-hidden group"
                  >
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-contain bg-[var(--bg-secondary)] group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--bg-primary)]/80 rounded-full p-2 sm:p-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-6 sm:h-6">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}

                {/* 오디오 플레이어 */}
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  {char.audioKR && (
                    <AudioPlayer src={char.audioKR} label="한국어" />
                  )}
                  {char.audioJP && (
                    <AudioPlayer src={char.audioJP} label="日本語" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-5 sm:h-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Image
            src={selectedImage}
            alt="확대 이미지"
            width={1600}
            height={1200}
            className="max-w-[95vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      </div>
    </div>
  );
}
