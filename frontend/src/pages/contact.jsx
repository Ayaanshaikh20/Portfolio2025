import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import emailjs from "emailjs-com";
import { FiArrowLeft, FiSend } from "react-icons/fi";

const serviceKey = import.meta.env.VITE_SERVICE_URL;
const templateKey = import.meta.env.VITE_TEMPLATE_URL;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  // Cursor glow movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      () => {
        alert("Message sent successfully.");
        form.current.reset();
      },
      () => {
        alert("Failed to send message. Please try again.");
      },
    );
  };

  return (
    <>
      {/* Cursor glow */}
      <div id="cursor-glow" className="pointer-events-none fixed inset-0 z-0" aria-hidden />

      <main className="relative z-10 min-h-screen bg-slate-900 font-sans text-slate-400">
        <div className="mx-auto flex max-w-screen-lg flex-col px-6 pt-5 lg:pt-10">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="
          mb-3 inline-flex items-center gap-2
          text-sm text-slate-400
          transition-colors duration-300
          hover:text-slate-200
        "
          >
            <FiArrowLeft size={16} />
            Back
          </button>

          {/* Header */}
          <div className="mb-5">
            <h1 className="text-2xl font-semibold text-slate-200">Get in touch</h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed">Have a question, proposal, or just want to say hello? Feel free to reach out — I’m always open to new ideas.</p>
          </div>

          {/* Centered form wrapper */}
          <div className="relative w-full max-w-lg">
            {/* Subtle glass hover */}
            <div
              className="
            pointer-events-none
            absolute inset-y-0 -inset-x-4
            rounded-xl
            opacity-0
            bg-white/[0.04]
            backdrop-blur-md
            transition-opacity duration-300
            group-hover:opacity-100
          "
            />

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="relative pb-5 flex flex-col gap-4 lg:gap-6">
              {/* Name */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-widest text-slate-500">Name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="
                w-full rounded-md
                bg-white/[0.04]
                border border-white/10
                px-3 py-2.5
                text-sm text-slate-200
                placeholder-slate-500
                focus:outline-none
                focus:border-teal-300/50
                transition-colors
              "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-widest text-slate-500">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="
                w-full rounded-md
                bg-white/[0.04]
                border border-white/10
                px-3 py-2.5
                text-sm text-slate-200
                placeholder-slate-500
                focus:outline-none
                focus:border-teal-300/50
                transition-colors
              "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-widest text-slate-500">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Your message"
                  className="
                w-full rounded-md
                bg-white/[0.04]
                border border-white/10
                px-3 py-2.5
                text-sm text-slate-200
                placeholder-slate-500
                focus:outline-none
                focus:border-teal-300/50
                transition-colors
                resize-none
              "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
              inline-flex items-center gap-2
              self-start
              rounded-md
              bg-white/[0.06]
              px-3 py-2
              text-sm font-medium text-slate-200
              transition-all duration-300
              hover:bg-white/[0.12]
            "
              >
                <FiSend size={14} />
                Send message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
