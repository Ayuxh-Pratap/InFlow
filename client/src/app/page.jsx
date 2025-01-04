import { FeatureCards } from "@/components/landing/featureCards";
import { FeatureSection } from "@/components/landing/featureSection";
import { Footer } from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Nav from "@/components/landing/nav";

export default function Home() {
  return (
    <div className="global-bg" >
      <Nav />
      <Hero />
      <FeatureCards />
      <FeatureSection />
      <Footer />
    </div>
  );
}
