"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 text-sm mb-6 font-mono">Hi! My Name is</p>
          <h1 className="text-6xl font-bold mb-4">Gurpinderjeet Sandhu</h1>
          <h2 className="text-4xl font-bold text-slate-400 mb-6">Full Stack Developer</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">I am a full-stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, performant web applications with modern technologies</p>
          <a href="#Projects" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-slate-950 transition-all">View My Work</a>
        </div>
      </section>
      {/* <h1 className="text-4xl pt-32">Hello Portfolio!</h1> */}
    </div>
  );
}
