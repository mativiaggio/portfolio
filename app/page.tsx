import { HomeHero } from "@/components/hero/HomeHero";
import { HomeTimeline } from "@/components/timeline/HomeTimeline";

export default function Home() {
  return (
    <main className="bg-home-dark-200">
      <HomeHero />
      <div id="experiencia-laboral">
        <HomeTimeline />
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
