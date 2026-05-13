export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <header className="p-8 border-b border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold">George Samir Nobil</h1>
            <p className="text-slate-300 mt-2 text-lg">Computer Science Student • Front-End Developer</p>
          </div>

          <a
            href="https://github.com/georgesamir555"
            target="_blank"
            className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            GitHub Profile
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Building Modern
              <span className="block text-cyan-400">Web Experiences</span>
            </h2>

            <p className="text-slate-300 mt-6 text-lg leading-8">
              Passionate Computer Science student focused on creating responsive,
              interactive, and user-friendly web applications using modern front-end
              technologies.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <div className="bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">
                Front-End Development
              </div>
              <div className="bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">
                UI/UX Design
              </div>
              <div className="bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">
                Responsive Websites
              </div>
            </div>
          </div>

          <div className="bg-slate-800/70 border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Quick Information</h3>

            <div className="space-y-4 text-slate-300">
              <p><span className="font-semibold text-white">Email:</span> Georgesamir554@gmail.com</p>
              <p><span className="font-semibold text-white">Phone:</span> 01229308675</p>
              <p><span className="font-semibold text-white">Started:</span> 2022</p>
              <p><span className="font-semibold text-white">Graduation:</span> 2026</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'Python',
              'C++',
              'PHP'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <p className="text-xl font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Portfolio Website</h3>
              <p className="text-slate-300 leading-7">
                Personal portfolio website designed to showcase projects, skills,
                and front-end development experience.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Responsive Web Applications</h3>
              <p className="text-slate-300 leading-7">
                Multiple responsive websites built using HTML, CSS, JavaScript,
                and PHP with modern layouts and clean user interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-8 text-slate-100">
            Interested in collaborating or building modern web applications?
          </p>

          <a
            href="mailto:Georgesamir554@gmail.com"
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition inline-block"
          >
            Contact Me
          </a>
        </section>
      </main>
    </div>
  )
}
