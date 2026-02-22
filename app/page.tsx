import { LeftPanel } from "@/app/components/left-panel";
import { RightPanel } from "@/app/components/right-panel";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="bg-background min-h-dvh">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-6">
        <LeftPanel />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}
