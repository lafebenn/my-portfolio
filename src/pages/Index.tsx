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
      <Helmet>
        <title>William Bennett | Information Systems Student and Research Assistant</title>
        <meta name="description" content="Portfolio showcasing web development projects, automation workflows, and open-source contributions. Building modern digital experiences." />
        <meta name="keywords" content="developer, portfolio, web development, automation, react, python" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
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
