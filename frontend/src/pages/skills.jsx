
const Skills = () => {
  return (
    <>
      <section className="mt-20" id="Skills">
        <div className="w-full flex flex-col items-center align-middle gap-4 border-2 border-white p-4 lg:p-10">
          <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Skills</span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 text-white mt-4">
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Languages</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Frameworks</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>Next.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Libraries</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Tools & Platforms</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>Vercel / Netlify / Render</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Databases</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Other Skills</h3>
              <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                <li>RESTful APIs</li>
                <li>Responsive Design</li>
                <li>Web Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
