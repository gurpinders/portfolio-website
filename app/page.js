"use client";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav Bar: */}
      <nav className="fixed top-0 w-full p-6 bg-slate-950 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Gurpinderjeet Sandhu</div>
          <div className="flex gap-6">
            <a href="#Home" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a>
            <a href="#About" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a>
            <a href="#Projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Project</a>
            <a href="#Contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home Section: */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-sm mb-6 font-mono">Hi! My Name is</p>
          <h1 className="text-6xl font-bold mb-4">Gurpinderjeet Sandhu</h1>
          <h2 className="text-4xl font-bold text-slate-400 mb-6">Full Stack Developer</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">I am a full-stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, performant web applications with modern technologies.</p>
          <a href="#Projects" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-slate-950 transition-all">View My Work</a>
        </div>
      </section>

      {/* About Section: */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>Hello! I am Gurpinderjeet Sandhu, a full-stack developer passionate about creating elegant solutions to complex problems. I specialize in building scalable web applications that prioritize user experience and performance, turning ideas into polished, production-ready products.</p>
              <p>My journey into software development began with a curiosity for how things work under the hood. Since then, I have developed expertise across the full stack—from crafting intuitive React interfaces to architecting robust backend systems with Node.js. I thrive on the challenge of solving real-world problems through clean, maintainable code.</p>
              <p>Currently, I am focused on mastering modern web technologies like Next.js and TypeScript while building projects that demonstrate both technical depth and practical application. I am particularly drawn to opportunities where I can contribute to meaningful products while continuing to grow as a developer in a collaborative, fast-paced environment.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Technologies I Work With:</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  NodeJS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  Python
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section: */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 Card - Invoice System Project */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all">
              <div className="mb-4 -mx-6 -mt-6">
                <div className="grid grid-cols-2 gap-2 p-2 bg-slate-900 rounded-t-lg">
                  <Image 
                    src="/dashboard.png" 
                    alt="Invoice System Dashboard"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image 
                    src="/create_invoice_with_entries.png" 
                    alt="Invoice System Entries"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="text-emerald-400 text-sm font-mono mb-2">Featured Project:</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Invoice Management System</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">Full-stack web application for hauling invoice management with automatic calculations, PDF generation, and iPad optimization. Reduces invoice creation time by 70%.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Express</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">MongoDB</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Tailwind CSS</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/gurpinders/invoice-system" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">GitHub</a>
                <a href="https://invoice-system-virid.vercel.app" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Live Demo</a>
              </div>
            </div>

            {/* Project 2 Card - Project Placeholder */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Project Placeholder</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">Description Placeholder</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Express</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">MongoDB</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Tailwind CSS</span>
              </div>
              <div className="flex gap-4">
                <a href="#Placeholder" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Placeholder</a>
              </div>
            </div>
            {/* Project 3 Card - Project Placeholder */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-white">Project Placeholder</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">Description Placeholder</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Express</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">MongoDB</span>
                <span className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-xs">Tailwind CSS</span>
              </div>
              <div className="flex gap-4">
                <a href="#Placeholder" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Placeholder</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-lg">I am currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!</p>
          <a href="mailto:psandhu0124@gmail.com" className="inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-slate-950 transition-all font-medium mb-8">Email</a>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/gurpinders" className="text-slate-400 hover:text-emerald-400 transition-colors text-lg">GitHub</a>
            <a href="https://linkedin.com/in/YOUR-LINKEDIN" className="text-slate-400 hover:text-emerald-400 transition-colors text-lg">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer: */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm">Built with Next.js & Tailwind CSS by Gurpinderjeet Sandhu</p>
          <p className="text-slate-600 text-xs mt-2">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
