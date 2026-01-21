import { useEffect } from "react";

const AppShell = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative z-10 min-h-screen bg-slate-900 text-slate-400 font-sans">
        {children}
      </div>
    </>
  );
};

export default AppShell;
