import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col gap-2.5 items-center pb-8 px-6 w-full">
      {/* CTA Block */}
      <section
        className="rounded-[30px] w-full overflow-hidden pt-[60px] flex flex-col items-center"
        style={{
          backgroundImage:
            "linear-gradient(179deg, #F74600 22.278%, #FBD225 100%)",
        }}
      >
        <div className="flex flex-col gap-5 items-center w-full overflow-hidden">
          {/* Heading */}
          <h2 className="text-[50px] font-bold text-white text-center tracking-[-3px] leading-[55px] max-w-[787px]">
            Transform your design with SeeDesign today
          </h2>

          {/* Subtext */}
          <p className="text-[16px] text-[#f5f5f5] text-center leading-[23.2px] max-w-[618px]">
            We&apos;ve helped our clients raise over $850M, triple their
            conversion rates, and close funding with confidence — all through
            beautiful, strategic design.
          </p>

          {/* CTA Button */}
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#f5f5f5] px-6 py-5 rounded-full border border-[#cd5b2a] shadow-[inset_0px_-5px_10px_0px_#f68554]"
          >
            <Image
              src="/images/icons/calendar.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="text-[16px] font-semibold text-[#ea7e2a] tracking-[-0.64px]">
              Schedule your call
            </span>
          </a>
        </div>

        {/* Decorative image strip */}
        <div
          className="relative w-full mt-5"
          style={{ aspectRatio: "1392 / 203" }}
        >
          <Image
            src="/images/decorative/footer-strip.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="bg-white rounded-[100px] w-full flex items-center justify-between px-6 pr-3 py-3 overflow-hidden">
        {/* Copyright */}
        <span className="text-[14px] font-medium text-black opacity-60 whitespace-nowrap">
          © SeeDesign 2026. All Rights Reserved.
        </span>

        {/* Center Logo */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/logos/byondx-v1.svg"
            alt="BYONDX"
            width={211}
            height={33}
          />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {[
            {
              href: "#",
              icon: "/images/icons/linkedin.svg",
              label: "LinkedIn",
              w: 18,
              h: 18,
            },
            {
              href: "#",
              icon: "/images/icons/x.svg",
              label: "X",
              w: 13,
              h: 14,
            },
            {
              href: "#",
              icon: "/images/icons/mail.svg",
              label: "Mail",
              w: 17,
              h: 14,
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-[51px] h-[51px] rounded-[30px] border border-border-gray flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label={social.label}
            >
              <Image
                src={social.icon}
                alt=""
                width={social.w}
                height={social.h}
              />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
