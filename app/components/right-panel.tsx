import Image from "next/image";

type ImageItem = { type: "image"; src: string; alt: string };
type VideoItem = { type: "video"; src: string; alt: string };
type PortfolioItem = ImageItem | VideoItem;

const items: PortfolioItem[] = [
  { type: "image", src: "/images/showcase/teramind-dashboard.png", alt: "Teramind Dashboard" },
  { type: "video", src: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/gobook-intro.mp4", alt: "GoBook Intro" },
  { type: "image", src: "/images/showcase/teramind-hero.png", alt: "Teramind Hero Section" },
  { type: "video", src: "https://pub-34eb5d510c37477d8b6ac0dac44e32fb.r2.dev/relie.ai-intro.mp4", alt: "Relie.ai Intro" },
  { type: "image", src: "/images/showcase/feelo-onboarding.png", alt: "Feelo Onboarding" },
  { type: "image", src: "/images/showcase/payable-thumbnail.webp", alt: "Payable Thumbnail" },
];

export function RightPanel() {
  return (
    <main className="flex-1 pt-6 px-4">
      <div className="flex flex-col gap-2.5 pb-6">
        {items.map((item) =>
          item.type === "video" ? (
            <div key={item.alt} className="relative w-full aspect-video bg-black overflow-hidden">
              <video
                src={item.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label={item.alt}
              />
            </div>
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
