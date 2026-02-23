import { LeftPanel } from "@/app/components/left-panel";
import { RightPanel } from "@/app/components/right-panel";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="flex flex-col lg:flex-row w-full">
        <LeftPanel />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}
