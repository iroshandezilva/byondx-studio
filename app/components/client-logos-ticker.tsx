import Image from "next/image";

// Exact logo sizes from Figma (node 318:12944)
const clientLogos = [
  { name: "Amplifyn",   src: "/images/logos/amplifyn.png",   w: 92.4,  h: 46.2  },
  { name: "Payable",    src: "/images/logos/payable.svg",    w: 67.62, h: 15.68 },
  { name: "Helakuru",   src: "/images/logos/helakuru.png",   w: 23.8,  h: 23.8  },
  { name: "Sneakertub", src: "/images/logos/sneakertub.png", w: 84,    h: 42    },
  { name: "Rooster",    src: "/images/logos/rooster.png",    w: 83.3,  h: 41.65 },
  { name: "Brolly",     src: "/images/logos/brolly.png",     w: 96.6,  h: 48.3  },
];

export function ClientLogosTicker() {
  return (
    <div className="grid grid-cols-2 gap-[4px]">
      {clientLogos.map((logo) => (
        <div
          key={logo.name}
          className="bg-white rounded-[10px] flex items-center justify-center h-[49px] overflow-hidden"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={Math.round(logo.w * 2)}
            height={Math.round(logo.h * 2)}
            style={{ width: logo.w, height: logo.h, objectFit: "contain", filter: "grayscale(100%)" }}
          />
        </div>
      ))}
    </div>
  );
}
