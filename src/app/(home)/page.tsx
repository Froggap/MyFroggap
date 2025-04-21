import AboutSections from "@/modules/landing/about/ui/AboutSections";
import TechnologySection from "@/modules/landing/about/ui/TechnologySection";
import WorkingSection from "@/modules/landing/about/ui/WorkingSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <AboutSections></AboutSections>
      <TechnologySection></TechnologySection>
      <WorkingSection></WorkingSection>
    </div>
  );
}
