import Image from "next/image";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 24 20" fill="currentColor">
      <path d="M20 0H4C1.8 0 0 1.8 0 4v12c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 2L12 11 4 2h16zm2 14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4.4l9.4 9.4c.3.3.7.4 1.1.2.1 0 .1-.1.2-.2L22 4.4V16z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#818579" }}>
      {/* Main content */}
      <div className="w-full px-6 lg:px-12 py-16 lg:py-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Heading + CTA */}
          <div className="flex flex-col gap-1">
            <p
              className="text-[#f6f7f3] text-[32px] lg:text-[44px] leading-[1.2] tracking-[-1.5px] lg:tracking-[-2.2px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Let&apos;s Resolve your design
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <p
                className="text-[#f6f7f3] text-[32px] lg:text-[44px] leading-[1.2] tracking-[-1.5px] lg:tracking-[-2.2px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Challenge
              </p>
              {/* CTA button */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#24251f] text-white rounded-xl px-5 h-11 text-[15px] font-medium tracking-[-0.5px] hover:opacity-90 transition-opacity shrink-0"
              >
                Lets Talk
                <span className="w-6 h-6 flex items-center justify-center text-lg leading-none">+</span>
              </a>
              <p
                className="text-[#f6f7f3] text-[32px] lg:text-[44px] leading-[1.2] tracking-[-1.5px] lg:tracking-[-2.2px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Together
              </p>
            </div>
          </div>

          {/* Right: Email + Socials */}
          <div className="flex flex-col gap-6 lg:items-end">
            <a
              href="mailto:chat.byondx@studio"
              className="text-[#f6f7f3] text-[18px] lg:text-[20px] font-medium tracking-[-0.5px] hover:opacity-80 transition-opacity"
            >
              chat.byondx@studio
            </a>
            <div className="flex items-center gap-[7px]">
              {[
                { href: "#", label: "LinkedIn", icon: <LinkedInIcon /> },
                { href: "#", label: "X", icon: <XIcon /> },
                { href: "mailto:chat.byondx@studio", label: "Mail", icon: <MailIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-[10px] border border-[#f6f7f3]/60 flex items-center justify-center text-[#f6f7f3] hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#adadad]/60 w-full">
        <div className="w-full px-6 lg:px-12 py-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#f6f7f3] text-[14px] lg:text-[16px] tracking-[-0.4px]">
            ©2026 Byondx Studio, All Rights Reserved
          </p>
          <div className="shrink-0">
            <Image
              src="/images/logos/byondx-light.svg"
              alt="BYONDX"
              width={118}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
