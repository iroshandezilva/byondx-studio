import Image from "next/image";

const projects = [
  {
    src: "/images/showcase/teramind-dashboard.png",
    alt: "Teramind Dashboard",
  },
  {
    src: "/images/showcase/teramind-hero.png",
    alt: "Teramind Hero Section",
  },
  {
    src: "/images/showcase/feelo-onboarding.png",
    alt: "Feelo Onboarding",
  },
  {
    src: "/images/showcase/payable-thumbnail.webp",
    alt: "Payable Thumbnail",
  },
];

export function RightPanel() {
  return (
    <main className="flex-1 pt-6 px-4">
      <div className="flex flex-col gap-2.5 pb-6">
        {projects.map((project) => (
          <div key={project.alt} className="relative w-full aspect-video">
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 901px, 100vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
