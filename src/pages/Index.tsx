import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* Keep in sync with the static tags in index.html — these override them
          at runtime, so a mismatch means the tab title and the link preview
          disagree. */}
      <Helmet>
        <title>William Bennett | BYU Information Systems, expected April 2027</title>
        <meta name="description" content="William Bennett — BYU Information Systems student (expected April 2027) targeting consulting and product management roles. Learns new domains quickly and has taken multiple products from an idea to adoption at scale." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Fixed navbar + long single-page layout: keyboard users need a way
            past the nav on every section jump. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
