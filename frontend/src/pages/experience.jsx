
const Experience = () => {
  const expData = [
    {
      company: "Godrej Infotech Ltd.",
      role: "Assistant Manager",
      period: "Dec 2025 – Present | Mumbai, Maharashtra",
      icon: <span className="text-2xl">🧑‍💼</span>,
      highlights: [
        "Leading software development teams and managing multiple projects with a focus on innovation and efficiency.",
        "Mentoring junior developers and implementing best practices for scalable solutions.",
        "Overseeing project delivery, stakeholder communication, and continuous process improvement.",
      ],
    },
    {
      company: "Prosoft e-Solutions India Pvt. Ltd.",
      role: "Software Developer",
      period: "May 2024 – Dec 2025 | Belgaum, Karnataka",
      icon: <span className="text-2xl">💼</span>,
      highlights: [
        "Developed WhatsApp chatbot using WhatsApp Cloud API, Node.js, and Express, integrated with webhook-based event handling.",
        "Built a bot configuration dashboard in React.js with Express.js RESTful APIs for backend logic and chatbot customization.",
        "Migrated and modernized the legacy C5 CAT Analyzer .NET application by rebuilding it with a React.js frontend and Express.js backend, enhancing performance and scalability.",
        "Implemented parallel processing and asynchronous operations in data import module.",
      ],
    },
    {
      company: "CodeArray Technologies Pvt. Ltd.",
      role: "Associate Software Engineer",
      period: "Jun 2023 – May 2024 | Mumbai, Maharashtra",
      icon: <span className="text-2xl">💻</span>,
      highlights: [
        "Contributed to building a seamless and high-performance web application using Next.js and TypeScript, leveraging Redux Toolkit for efficient state management.",
        "Implemented a dynamic UI theme selection feature personalized based on individual user preferences.",
        "Spearheaded the development of the complete 'Place Order' workflow, including advanced cart functionalities with Redux Toolkit integration.",
        "Utilized advanced React.js concepts and crafted custom hooks to enhance performance, maintainability, and deliver a smooth user experience.",
      ],
      project: "EZOrder Web – Field Salesman (User Panel)",
    },
  ];

  return (
    <section className="py-16" id="Experience">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Experience</h2>
        <div className="space-y-10">
          {expData.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative bg-[#23232b] rounded-2xl shadow-lg border border-white/10 overflow-hidden group transition-all"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-600 group-hover:w-2 transition-all duration-300" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 border border-orange-500/30">
                    {exp.icon}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{exp.company}</h3>
                    <span className="block text-base text-orange-400 font-medium">{exp.role}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 md:text-sm font-mono">{exp.period}</span>
              </div>
              {exp.project && <div className="px-6 pb-1 text-sm text-orange-300 font-semibold">{exp.project}</div>}
              <ul className="list-disc pl-12 pr-6 pb-6 space-y-2 text-gray-300 text-sm md:text-base">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
