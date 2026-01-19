import { useState } from "react";
import Drawer from "./components/drawer";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./pages/hero";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main className="w-full flex flex-col bg-[#16161b] items-center justify-center">
      {/* Main Content */}
      <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Header setOpenMenu={setOpenMenu} />
      <main className="min-h-screen max-w-5xl">
        <main id="About" className="w-full flex flex-col align-middle items-center justify-center">
          <main className="w-full">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
          </main>
        </main>
      </main>
      <Footer />
    </main>
  );
};

export default Layout;
