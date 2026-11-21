import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueFlowSection } from './components/ValueFlowSection';
import { About } from './components/About';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { AIValueNetwork } from './components/AIValueNetwork';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProcessJourney } from './components/ProcessJourney';
import { VideoShowcase } from './components/VideoShowcase';
import { PhotoGallery } from './components/PhotoGallery';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { PersonBehindWork } from './components/PersonBehindWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAFBFF] text-[#18243B]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-[#315BFF] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <Hero />
          <ValueFlowSection />
          <About />
          <ExpertiseGrid />
          <AIValueNetwork />
          <ExperienceTimeline />
          <ProjectShowcase />
          <ProcessJourney />
          <VideoShowcase />
          <PhotoGallery />
          <Skills />
          <Education />
          <PersonBehindWork />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
