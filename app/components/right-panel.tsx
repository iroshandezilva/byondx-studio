"use client";

import Image from "next/image";
import { useState, useRef } from "react";

type ImageItem = { type: "image"; src: string; alt: string };
type VideoItem = { type: "video"; src: string; alt: string; thumbnail: string };
type PortfolioItem = ImageItem | VideoItem;

const items: PortfolioItem[] = [
  { type: "image", src: "/images/showcase/teramind-dashboard.png", alt: "Teramind Dashboard" },
  {
    type: "video",
    src: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/gobook-intro.mp4",
    alt: "GoBook Intro",
    thumbnail: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/gobook-intro.mp4#t=0.5",
  },
  { type: "image", src: "/images/showcase/teramind-hero.png", alt: "Teramind Hero Section" },
  {
    type: "video",
    src: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/relie.ai-intro.mp4",
    alt: "Relie.ai Intro",
    thumbnail: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/relie.ai-intro.mp4#t=0.5",
  },
  { type: "image", src: "/images/showcase/feelo-onboarding.png", alt: "Feelo Onboarding" },
  { type: "image", src: "/images/showcase/payable-thumbnail.webp", alt: "Payable Thumbnail" },
];

function VideoPlayer({ item }: { item: VideoItem }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group">
      <video
        ref={videoRef}
        src={item.src}
        controls={playing}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        aria-label={item.alt}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          {/* Thumbnail via poster-like overlay using video's first frame */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play button */}
          <button
            className="relative z-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0px_8px_24px_rgba(0,0,0,0.24)] transition-transform duration-150 group-hover:scale-110 active:scale-95"
            aria-label={`Play ${item.alt}`}
          >
            {/* Play icon — offset slightly right to optically center */}
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="translate-x-[2px]"
            >
              <path
                d="M2 2L18 11L2 20V2Z"
                fill="#0A0A0A"
                stroke="#0A0A0A"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export function RightPanel() {
  return (
    <main className="flex-1 pt-6 px-4">
      <div className="flex flex-col gap-2.5 pb-6">
        {items.map((item) =>
          item.type === "video" ? (
            <VideoPlayer key={item.alt} item={item} />
          ) : (
            <div key={item.alt} className="relative w-full aspect-video">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 901px, 100vw"
              />
            </div>
          )
        )}
      </div>
    </main>
  );
}
