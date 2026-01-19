import React, { useRef } from "react";
import emailjs from "emailjs-com";

const serviceKey = import.meta.env.VITE_SERVICE_URL;
const templateKey = import.meta.env.VITE_TEMPLATE_URL;
const privateKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceKey, templateKey, form.current, privateKey).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
      }
    );
  };
  return (
    <>
      <form className="w-full max-w-xl flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message..."
            className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-red-400 hover:text-white transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
