import Image from "next/image";
import { TeamAvatars } from "./team-avatars";
import { ClientLogosTicker } from "./client-logos-ticker";

function ByondxLogo() {
  return (
    <svg
      width="106"
      height="18"
      viewBox="0 0 106 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.2422 0.617183V0.419922H94.252L98.7435 7.00348L103.827 0.419922H105.111L99.3358 7.8665L105.999 17.5816H102.124L97.2874 10.5295L91.8088 17.5816H90.5502L96.6951 9.6665L92.6478 3.74869C91.562 2.31855 89.9825 0.617183 89.2422 0.617183Z"
        fill="#0A0A0A"
      />
      <path
        d="M81.3319 17.5808H73.6322V5.59727C73.6322 3.0822 72.9659 0.789051 72.3242 0.616449V0.394531H81.3319C86.7119 0.394531 89.6239 4.11782 89.6239 8.97535C89.6239 13.8575 86.7119 17.5808 81.3319 17.5808ZM86.4157 8.97535C86.4157 4.56166 84.4414 1.40549 81.3319 1.40549H76.8404V16.5699H81.3319C84.4414 16.5699 86.4157 13.4137 86.4157 8.97535Z"
        fill="#0A0A0A"
      />
      <path
        d="M54.3477 0.617183V0.419922H59.234L69.8458 12.6747V0.419922H70.8577V17.5816H69.8458L56.6674 2.34321V17.5816H55.6556V5.598C55.6556 3.08294 55.014 0.789785 54.3477 0.617183Z"
        fill="#0A0A0A"
      />
      <path
        d="M50.8285 2.58904C55.1472 6.09041 55.1472 11.9096 50.8285 15.411C48.7061 17.137 45.9421 18 43.1534 18C40.3894 18 37.6254 17.137 35.4784 15.411C31.1843 11.9096 31.1843 6.09041 35.4784 2.58904C37.6254 0.863014 40.3894 0 43.1534 0C45.9421 0 48.7061 0.863014 50.8285 2.58904ZM48.5827 3.35343C47.0773 1.8 45.1277 1.03562 43.1534 1.03562C41.2038 1.03562 39.2295 1.8 37.7488 3.35343C34.7627 6.46027 34.7627 11.5397 37.7488 14.6219C39.2295 16.2 41.2038 16.9644 43.1534 16.9644C45.1277 16.9644 47.0773 16.2 48.5827 14.6219C51.5688 11.5397 51.5688 6.46027 48.5827 3.35343Z"
        fill="#0A0A0A"
      />
      <path
        d="M16.8711 0.617183V0.419922H21.9796L27.3842 8.58157L32.6407 0.419922H33.85L27.8778 9.6665V17.5816H24.6695V10.2829L21.0171 4.75965C19.487 2.4665 17.8336 0.617183 16.8711 0.617183Z"
        fill="#0A0A0A"
      />
      <path
        d="M0 0.394531H9.03238C15.1033 0.394531 16.1151 2.16987 16.1151 4.24111C16.1151 5.64659 15.6709 6.90412 13.5239 7.56987C16.2385 8.33426 17.2504 9.937 17.2504 12.3288C17.2504 15.7315 15.202 17.5808 9.03238 17.5808H1.33265V5.59727C1.33265 3.0822 0.666323 0.789051 0 0.616449V0.394531ZM12.9069 4.24111C12.9069 2.88494 12.6601 1.40549 9.03238 1.40549H4.54087V8.16165C5.60205 7.3233 7.40359 7.07672 9.03238 7.07672C12.6601 7.07672 12.9069 5.59727 12.9069 4.24111ZM14.0421 12.3288C14.0421 9.41919 12.6601 8.08768 9.03238 8.08768C6.95937 8.08768 4.54087 8.40823 4.54087 10.2329V16.5699H9.03238C12.6601 16.5699 14.0421 15.2384 14.0421 12.3288Z"
        fill="#0A0A0A"
      />
    </svg>
  );
}

function CalComIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke="black" strokeOpacity="0.2" />
      <rect x="2" y="2" width="10" height="10" rx="2.5" fill="black" fillOpacity="0.06" />
      <path d="M4 5.5H10" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4 7.5H8" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4 9.5H6" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="5" y="1" width="1.2" height="2.5" rx="0.6" fill="black" fillOpacity="0.4" />
      <rect x="7.8" y="1" width="1.2" height="2.5" rx="0.6" fill="black" fillOpacity="0.4" />
    </svg>
  );
}

const bulletPoints = [
  {
    icon: "/images/icons/coin.svg",
    text: "Simple pricing —",
    bold: "$2,697/mo",
  },
  {
    icon: "/images/icons/clock.svg",
    text: "Pause or cancel anytime —",
    bold: "full flexibility",
  },
  {
    icon: "/images/icons/paper-plane.svg",
    text: "10+ yrs of expertise —",
    bold: "senior designers",
  },
];


export function LeftPanel() {
  return (
    <aside className="w-full lg:max-w-[600px] shrink-0 lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto scrollbar-hide flex flex-col gap-6 pt-6 px-6 pb-4">
      {/* Top section: Logo + Heading + CTA */}
      <div className="flex flex-col gap-5 pb-5">
        {/* Logo */}
        <div className="pb-3">
          <ByondxLogo />
        </div>

        {/* Heading + Subtext */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-semibold leading-[40px] tracking-[-1.28px] text-black" style={{ fontFamily: "var(--font-ibm-plex-serif), Georgia, serif" }}>
            A design studio that becomes part of your team.
          </h1>
          <p className="text-[14px] leading-[20.3px] text-black opacity-60">
            A focused studio of four. We embed with your team, think like
            owners, and ship work that moves metrics — not just looks good in a
            portfolio.
          </p>
        </div>

        {/* CTA Button + Arrow + Profile */}
        <div className="relative">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-green h-[44px] px-4 rounded-xl shadow-[0px_1px_2px_0.5px_rgba(0,0,0,0.03),0px_1.5px_5px_0px_rgba(0,0,0,0.06)] ring-[1.5px] ring-inset ring-black/6 transition-all duration-150 hover:brightness-95 hover:shadow-[0px_2px_4px_1px_rgba(0,0,0,0.06),0px_3px_8px_0px_rgba(0,0,0,0.10)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-[14px] font-semibold tracking-[-0.56px] text-black">
              Schedule a call
            </span>
          </a>

          {/* Arrow + Profile - absolute to CTA button */}
          <div className="absolute left-[195px] top-[4px] w-[91px] h-[100px]">
            {/* Arrow */}
            <div className="w-[48px] h-[49px]">
              <Image
                src="/images/icons/arrow.svg"
                alt=""
                width={48}
                height={49}
                className="w-full h-full"
              />
            </div>
            {/* Profile pic */}
            <div className="absolute bottom-[43px] right-0 w-[76px]">
              <div className="flex items-center justify-center ml-2">
                <div className="-rotate-[18deg]">
                  <div className="w-8 h-8 rounded-full overflow-hidden shadow-[0px_5px_3px_0px_rgba(0,0,0,0.01),0px_2px_2px_0px_rgba(0,0,0,0.02),0px_1px_1px_0px_rgba(0,0,0,0.03)] ring-3 ring-white">
                    <Image
                      src="/images/photos/iroshan.webp"
                      alt="Iroshan"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Talk to text */}
            <div className="absolute bottom-[12px] left-[20px] opacity-40">
              <span className="font-hand text-[12px] text-black leading-[14.4px] whitespace-nowrap">
                TALK TO IROSHAN
              </span>
            </div>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="flex flex-col gap-3 mt-6">
          <span className="font-mono text-[12px] text-accent-orange leading-[15px]">
            • Work with us
          </span>
          <div className="flex flex-col gap-2">
            {bulletPoints.map((bp) => (
              <div
                key={bp.bold}
                className="flex items-center gap-1.5 rounded-[46px]"
              >
                <div className="w-4 h-4 opacity-60">
                  <Image src={bp.icon} alt="" width={16} height={16} />
                </div>
                <span className="text-[12px] font-medium tracking-[-0.48px] text-black opacity-60">
                  {bp.text}{" "}
                  <span className="font-semibold">{bp.bold}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section: Companies + Testimonials */}
      <div className="flex flex-col gap-1.5 w-full">
        {/* Client Logos */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[12px] leading-[15px]" style={{ color: "#25241F" }}>
            • Happy clients
          </span>
          <ClientLogosTicker />
        </div>

        {/* Team Avatars */}
        <TeamAvatars />
      </div>
    </aside>
  );
}
