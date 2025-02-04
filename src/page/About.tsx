import AboutHero from '../components/about/AboutHero';
import Support from '../components/about/Support';
import WhyChoooseUs from '../components/about/WhyChoooseUs';
import ContactAbout from '../components/about/ContactAbout';
import CompanySupportAbout from '../components/about/CompanySupportAbout';
import OurTeam from '../components/about/OurTeam';
  function About() {
    return (
      <div>
        {/* Hero Section */}
        <AboutHero />
  
        {/* Features Section */}
        <WhyChoooseUs />
  
        {/* Support Section */}
        <Support />
  
        {/* Contact Section */}
        <ContactAbout />

        {/* Our Team Section */}
        <OurTeam />
  
        {/* Stats Section */}
        <CompanySupportAbout />
      </div>
    );
  }
  
  export default About;