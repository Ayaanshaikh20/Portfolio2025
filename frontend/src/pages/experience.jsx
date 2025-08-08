

const Experience = () => {
  return (
    <main>
      {/* Experience */}
      <section className="mt-20" id="Experience">
        <div className="w-full flex flex-col justify-between items-center align-middle border-2 border-white p-4 lg:p-10">
          <span className="font-semibold text-xl lg:text-4xl text-white tracking-wide">Experience</span>

          <div className="mt-5 w-full space-y-20">
            {/* Prosoft e-Solutions */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-md lg:text-xl tracking-wide">
                Prosoft e-Solutions India Pvt. Ltd.
              </span>
              <span className="text-sm lg:text-lg text-white font-mono">Software Developer</span>
              <span className="text-gray-500 text-sm">May 2024 – Present | Belgaum, Karnataka</span>

              <div className="mt-5">
                <ul className="list-disc pl-4 space-y-3 text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl">
                  <li>
                    Designed and developed a production-grade <strong>WhatsApp chatbot</strong> using{" "}
                    <strong>WhatsApp Cloud API</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>,
                    integrating webhook-based event handling to automate message responses and handle{" "}
                    <strong>10K+ messages/month</strong>.
                  </li>
                  <li>
                    Engineered a secure <strong>bot configuration dashboard</strong> in <strong>React.js</strong> with
                    RESTful API support from <strong>Express.js</strong>, enabling role-based access control,
                    customizable bot replies, and real-time status monitoring.
                  </li>
                  <li>
                    Led the migration of the <strong>C5 CAT Analyzer .NET desktop application</strong> to a modern{" "}
                    <strong>React.js + Express.js</strong> web stack, preserving core analytical features while
                    achieving <strong>~40% faster load times</strong> and improved scalability.
                  </li>
                  <li>
                    Implemented high-performance data import pipelines for{" "}
                    <strong>large CSV, TXT, and Excel files</strong> using parallel processing and asynchronous streams,
                    reducing load time by <strong>70%</strong>.
                  </li>
                  <li>
                    Optimized state management and caching using <strong>TanStack React Query</strong>, eliminating
                    redundant API calls and boosting UI responsiveness for large datasets.
                  </li>
                </ul>
              </div>
            </div>

            {/* CodeArray Technologies */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-md lg:text-xl tracking-wide">
                CodeArray Technologies Pvt. Ltd.
              </span>
              <span className="text-sm lg:text-lg text-white font-mono">Associate Software Engineer</span>
              <span className="text-gray-500 text-sm">Jun 2023 – May 2024 | Mumbai, Maharashtra</span>
              <div className="mt-5">
                <ul className="list-disc pl-4 space-y-3 text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl">
                  <span className="font-semibold block">EZOrder Web – Field Salesman (User Panel)</span>

                  <li>
                    Contributed to building a responsive, high-performance <strong>Next.js + TypeScript</strong> web
                    application for field sales operations, leveraging <strong>Redux Toolkit</strong> for robust and
                    predictable state management.
                  </li>
                  <li>
                    Implemented a personalized <strong>UI theme selection</strong> feature, allowing users to store and
                    persist their theme preferences, improving user engagement.
                  </li>
                  <li>
                    Spearheaded the complete <strong>“Place Order” workflow</strong> — from product selection to final
                    order confirmation — including advanced cart functionalities like bulk updates, quantity validation,
                    and automatic tax calculations.
                  </li>
                  <li>
                    Developed reusable <strong>custom hooks</strong> to abstract complex data-fetching and form-handling
                    logic, increasing code maintainability and reducing duplication.
                  </li>
                  <li>
                    Built responsive and feature-rich <strong>Next UI tables</strong> with filtering, column-specific
                    search, sorting, pagination, and column resizing, ensuring smooth performance for datasets exceeding{" "}
                    <strong>50K rows</strong>.
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <ul className="list-disc pl-4 space-y-3 text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl">
                  <span className="font-semibold block">Clinicsoft Web (User Panel)</span>
                  <p className="text-gray-300 text-sm mb-2">
                    Clinicsoft is a healthcare application enabling doctors to manage patients, appointments, and
                    prescriptions efficiently.
                  </p>
                  <li>
                    Developed a <strong>Next.js + TypeScript</strong> web application from scratch, integrating
                    <strong>Redux Toolkit</strong> for predictable and scalable state management.
                  </li>
                  <li>
                    Implemented <strong>personalized theme selection</strong> with persistent user preferences,
                    enhancing user engagement.
                  </li>
                  <li>
                    Designed and delivered a complete <strong>appointment scheduling workflow</strong> with physician
                    availability settings.
                  </li>
                  <li>
                    Built <strong>reusable custom hooks</strong> for data fetching and form handling, reducing code
                    duplication and improving maintainability.
                  </li>
                  <li>
                    Engineered <strong>high-performance Next UI tables</strong> with advanced features such as
                    filtering, column-specific search, sorting, pagination, and column resizing — optimized for datasets
                    exceeding <strong>50K rows</strong> without performance loss.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
