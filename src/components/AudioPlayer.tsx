"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  label: string;
  autoPlay?: boolean;
  defaultVolume?: number;
  isBgm?: boolean;
}

export default function AudioPlayer({ src, label, autoPlay = false, defaultVolume = 1, isBgm = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = defaultVolume;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      if (autoPlay) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [autoPlay, defaultVolume]);

  useEffect(() => {
    if (isBgm) return;

    const audio = audioRef.current;
    if (!audio) return;

    const handleStopOthers = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail !== audio && !audio.paused) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("voice-play", handleStopOthers);
    return () => window.removeEventListener("voice-play", handleStopOthers);
  }, [isBgm]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (!isBgm) {
        window.dispatchEvent(new CustomEvent("voice-play", { detail: audio }));
      }
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button onClick={togglePlay} aria-label={isPlaying ? "일시정지" : "재생"}>
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <span className="text-xs text-[var(--text-secondary)] min-w-[45px]">{label}</span>

      <div className="progress-bar" onClick={handleProgressClick}>
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>

      <span className="time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
}
