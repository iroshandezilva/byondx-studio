"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Nextiva", src: "/images/logos/nextiva.svg", w: 50, h: 14 },
  { name: "Aura", src: "/images/logos/aura.svg", w: 45, h: 14 },
  { name: "TestRail", src: "/images/logos/testrail.svg", w: 54, h: 14 },
  { name: "Teramind", src: "/images/logos/teramind.svg", w: 74, h: 20 },
  { name: "Netic", src: "/images/logos/netic.svg", w: 47, h: 14 },
  { name: "Owner", src: "/images/logos/owner.png", w: 60, h: 14 },
];

const row1 = clientLogos.slice(0, 3);
const row2 = clientLogos.slice(3);

function LogoTile({ logo }: { logo: (typeof clientLogos)[number] }) {
  return (
    <div className="bg-white rounded-[10px] flex items-center justify-center w-[120px] h-[60px] shrink-0">
      <Image src={logo.src} alt={logo.name} width={logo.w} height={logo.h} />
    </div>
  );
}

function TickerRow({
  logos,
  reverse = false,
}: {
  logos: typeof clientLogos;
  reverse?: boolean;
}) {
  const items = [...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-[6px] w-max ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}
      >
        {items.map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export function ClientLogosTicker() {
  return (
    <div className="relative flex flex-col gap-[6px] overflow-hidden">
      <TickerRow logos={row1} />
      <TickerRow logos={row2} reverse />
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10"
        style={{
          background: "linear-gradient(to right, #F7F7F7, transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10"
        style={{
          background: "linear-gradient(to left, #F7F7F7, transparent)",
        }}
      />
    </div>
  );
}
