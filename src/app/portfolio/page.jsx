import HeroSection from "@/components/Portfolio/HeroSection";
import Landscape from "@/components/Portfolio/Landscape";
import ProfileSection from "@/components/Portfolio/ProfileSection";
import ExcellenceSection from "@/components/Portfolio/ExcellenceSection";

export default function Portfolio() {
    return (
        <div>
            <HeroSection />
            <Landscape />
            {/* <ExcellenceSection /> */}
            <ProfileSection />
        </div>
    );
}