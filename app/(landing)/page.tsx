import { LandingNavbar } from "@/components/Landing/landing-navbar";
import { LandingHero } from "@/components/Landing/landing-hero";
import { LandingContent } from "@/components/Landing/landing-content";

const LandingPage = () => {
    return (
        <div className="h-full ">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
}

export default LandingPage;