import HeroSection from "@/components/Portfolio/HeroSection";
import Landscape from "@/components/Portfolio/HorizontalScrollSections";
import ProfileSection from "@/components/Portfolio/ProfileSection";
import ExcellenceSection from "@/components/Portfolio/ExcellenceSection";
import HorizontalScrollSections from "@/components/Portfolio/HorizontalScrollSections";
import HorizontalScrollSectionMobile from "@/components/Portfolio/HorizontalScrollSectionMobile";

export default function Portfolio() {
    return (
        <div>
            <HeroSection />
            <div className="hidden md:block">
                <HorizontalScrollSections />
            </div>
            <div className="md:hidden block">
                <HorizontalScrollSectionMobile />
            </div>
            <ProfileSection />
        </div>
    );
}