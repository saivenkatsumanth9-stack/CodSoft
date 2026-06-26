import LoadingScreen from '@/components/portfolio/LoadingScreen';
import Navbar from '@/components/portfolio/Navbar';
import ProfileSidebar from '@/components/portfolio/ProfileSidebar';
import ScrollBackdrop from '@/components/portfolio/ScrollBackdrop';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import TimelineSection from '@/components/portfolio/TimelineSection';
import LearningJourneySection from '@/components/portfolio/LearningJourneySection';
import StatsSection from '@/components/portfolio/StatsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <LoadingScreen />
      <ScrollBackdrop />
      <Navbar />
      <ProfileSidebar />
      <div className="lg:pl-[336px] lg:pr-6">
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <SkillsSection />
          <LearningJourneySection />
          <TimelineSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
