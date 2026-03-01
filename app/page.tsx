"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      {/* NAVBAR */}
<nav className="flex justify-between items-center mb-24">
  <h2 className="text-lg font-semibold tracking-wide">
    SA
  </h2>

  <div className="flex gap-8 text-sm text-gray-400">
    <a href="#about" className="hover:text-white transition">About</a>
    <a href="#skills" className="hover:text-white transition">Skills</a>
    <a href="#resume">Resume</a>  
    <a href="#projects" className="hover:text-white transition">Projects</a>
    <a href="#certifications">Certifications</a>
    <a href="#contact" className="hover:text-white transition">Contact</a>
  </div>
</nav>

      {/* HERO */}
      <section className="max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Swayam Adatia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Aspiring Computer Science Student specializing in Cyber Security & Data Analysis.
        </motion.p>
      </section>

      {/* ABOUT */}
<section id="about" className="mt-40 max-w-3xl"> 
         <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Diploma graduate in Computer Engineering passionate about cybersecurity,
          networking, Linux systems, and data analysis using Python. I enjoy building
          clean, modern interfaces and solving analytical problems.
        </p>
      </section>

      {/* SKILLS */}
  <section id="skills" className="mt-40">
          <h2 className="text-3xl font-semibold mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <p className="text-gray-400">
              Python, Pandas, NumPy, HTML, CSS
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Cyber Security</h3>
            <p className="text-gray-400">
              Networking, Linux, Communications
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Data & Tools</h3>
            <p className="text-gray-400">
              Power BI, Excel, Matplotlib
            </p>
          </motion.div>

        </div>
      </section>
      {/* PROJECTS */}
<section id="projects" className="mt-40">
  <h2 className="text-3xl font-semibold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">

    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-4">
        Data Analysis Project
      </h3>
      <p className="text-gray-400 mb-6">
        Exploratory data analysis on smartphone dataset using Python,
        Pandas, NumPy and Matplotlib.
      </p>

      <a
        href="https://github.com/swayamsamiradatia-jpg/Data-Analysis-Project"
        target="_blank"
        className="text-sm text-white border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        View Project →
      </a>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-4">
        Phishing Detection System
      </h3>
      <p className="text-gray-400 mb-6">
        Machine learning based phishing URL detection system using
        Python and feature extraction techniques.
      </p>

      <a
        href="#"
        className="text-sm text-white border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Coming Soon →
      </a>
    </motion.div>

  </div>
</section>
{/* CONTACT */}
<section id="contact" className="mt-40 max-w-3xl">
  <h2 className="text-3xl font-semibold mb-8">Contact</h2>

  <form
    className="flex flex-col gap-6"
    onSubmit={async (e) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const name = (form.elements.namedItem("name") as HTMLInputElement).value;
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.send(
  "service_7wsw0wj",
  "template_4lsakyv",
  {
    name: name,
    email: email,
    message: message,
  },
  "bluicW3lsCcovl_Az"
);
      alert("Message sent successfully 🚀");
      form.reset();
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl focus:outline-none"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl focus:outline-none"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      required
      rows={5}
      className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl focus:outline-none"
    />

   <button
  type="submit"
  className="w-full mt-4 bg-white text-black py-4 rounded-xl font-semibold text-lg transition active:scale-95 relative z-50"
>
  Send Message →
</button>
  </form>
</section>
    {/* RESUME SECTION */}
<section id="resume" className="mt-40">
  <h2 className="text-3xl font-semibold mb-12">Resume</h2>

  <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">

    <h3 className="text-xl font-semibold mb-2">
      Swayam Samirbhai Adatia – CV
    </h3>

    <p className="text-gray-400 mb-6">
      Diploma in Computer Engineering • Cybersecurity & Data Analysis
    </p>

    <div className="flex gap-4">
      <a
        href="/cv-swayam-adatia.pdf"
        target="_blank"
        className="px-5 py-2 rounded-lg bg-white text-black font-semibold"
      >
        View CV
      </a>

      <a
        href="/cv-swayam-adatia.pdf"
        download
        className="px-5 py-2 rounded-lg border border-zinc-700"
      >
        Download CV
      </a>
    </div>

  </div>
</section>
      {/* CERTIFICATIONS */}
<section id="certifications" className="mt-40">
  <h2 className="text-3xl font-semibold mb-12">Certifications</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Google Cloud */}
    <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">
      <h3 className="text-xl font-semibold mb-2">
        Introduction to Security Principles in Cloud Computing
      </h3>
      <p className="text-gray-400 mb-4">
        Google Cloud • Coursera • 2025
      </p>
      <a
        href="https://coursera.org/verify/VHQ4V6FV2O0U"
        target="_blank"
        className="text-sm text-white border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Verify Certificate →
      </a>
    </div>

    {/* IBM */}
    <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">
      <h3 className="text-xl font-semibold mb-2">
        Python for Data Science, AI & Development
      </h3>
      <p className="text-gray-400 mb-4">
        IBM • Coursera • 2026
      </p>
      <a
        href="https://coursera.org/verify/AQ9ANBYLYT01"
        target="_blank"
        className="text-sm text-white border border-zinc-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Verify Certificate →
      </a>
    </div>

    {/* Deloitte */}
    <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">

  <h3 className="text-xl font-semibold mb-2">
    Deloitte – Data Analytics Job Simulation
  </h3>

  <p className="text-gray-400 mb-6">
    Completed practical tasks in Data Analysis & Forensic Technology • 2025
  </p>

  <a
    href="/deloitte-certificate.pdf"
    target="_blank"
    className="px-4 py-2 border border-zinc-700 rounded-lg"
  >
    View Certificate
  </a>

</div>
    {/* EasySkill */}
<div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">

  <img
    src="/data-analysis-certificate.jpeg"
    alt="Data Analysis Certificate"
    className="rounded-xl mb-4"
  />

  <h3 className="text-xl font-semibold mb-2">
    Data Analysis (A+ Grade)
  </h3>

  <p className="text-gray-400">
    EasySkill Career Academy • 2025
  </p>

</div>
</div>

  
</section>
    </main>
  );
}