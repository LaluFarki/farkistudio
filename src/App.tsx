import React, { useState } from "react";
import heroImage from "./assets/farki.png";
import projectStudentFinance from "./assets/projects/budget.png";
import projectLombokEats from "./assets/projects/makananlombok.jpeg";
import projectswebsite from "./assets/projects/esteh.png";
import logoPens from "./assets/Logo_PENS.png";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineLink,
  AiOutlineRight,
  AiOutlineMonitor,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

// Animasi sederhana untuk elemen melayang
const FloatingBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute animate-bounce duration-[3000ms] bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 ${className}`}
  >
    {children}
  </div>
);

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans text-[#242D49] overflow-x-hidden">
      {/* 1. NAVBAR */}
      <nav className="flex justify-between items-center px-8 md:px-24 py-8 sticky top-0 bg-[#FDFBF9]/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold tracking-tighter">
          Hisyam <span className="text-[#FCA61F]">Studio</span>
        </div>
        <div className="hidden md:flex gap-12 font-medium">
          <a href="#home" className="hover:text-[#FCA61F] transition">
            Home
          </a>
          <a href="#services" className="hover:text-[#FCA61F] transition">
            Services
          </a>
          <a href="#projects" className="hover:text-[#FCA61F] transition">
            Experience
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="bg-[#FCA61F] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:scale-105 transition active:scale-95"
          >
            Contact Us
          </button>

          {/* Dropdown Contact */}
          {isContactOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50">
              <a
                href="mailto:laluhisyam03@gmail.com"
                className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-xl transition text-sm font-bold text-gray-700"
              >
                <AiOutlineMail size={20} className="text-[#FCA61F]" />
                Email
              </a>
              <a
                href="https://wa.me/6281990699500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 rounded-xl transition text-sm font-bold text-gray-700"
              >
                <AiOutlineWhatsApp size={20} className="text-green-500" />
                WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative px-8 md:px-24 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-100/50 rounded-full blur-[100px] -z-10" />

        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-black">
            Hy! I Am <br />
            <span className="text-[#FCA61F]">Lalu Farki</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            Junior Web & Mobile Application Developer working in Surabaya.
            Focused on building full-stack solutions with React and Flutter.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="mailto:laluhisyam03@gmail.com?subject=Project Collaboration / Hire Inquiry&body=Halo Hisyam,%0D%0A%0D%0ASaya tertarik untuk mendiskusikan peluang kerja/proyek dengan Anda..."
              className="bg-[#FCA61F] text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition inline-block text-center"
            >
              Hire Me
            </a>
            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://github.com/LaluFarki"
                className="p-3 bg-white shadow-md rounded-full hover:bg-black hover:text-white transition"
              >
                <AiOutlineGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lalu-moh-hisyam-farki-034886300/"
                className="p-3 bg-white shadow-md rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <AiOutlineLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/lalufarki_?igsh=enluYnQ5dzV2bGFx"
                className="p-3 bg-white shadow-md rounded-full hover:bg-pink-600 hover:text-white transition"
              >
                <AiOutlineInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image & Floating Elements */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#FCA61F] to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" />

          {/* Main Portrait Placeholder - User should replace hisyam.png */}
          <div className="relative z-10 w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
            <img
              src={heroImage}
              alt="Hisyam Farki"
              className="w-full h-full object-contain filter drop-shadow-2xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Floating Badges */}
          <FloatingBadge className="top-10 -left-10 md:-left-20">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
              <AiOutlineCode size={24} />
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Web Dev
              <br />
              <span className="text-black text-sm">Junior</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="bottom-20 -right-10 md:-right-20 animate-bounce delay-700">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <AiOutlineMobile size={24} />
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Mobile App
              <br />
              <span className="text-black text-sm">Flutter</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="top-10 -right-10 md:-right-10 animate-bounce delay-700">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <AiOutlineMobile size={24} />
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Vidio Editing
              <br />
              <span className="text-black text-sm">DaVinci Resolve</span>
            </div>
          </FloatingBadge>

          {/* Ubah div terluar menjadi tag <a> */}
          <a
            href="https://www.pens.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-10 left-10 bg-white/80 backdrop-blur p-4 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={logoPens}
                alt="Logo PENS"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <div className="text-sm font-semibold">
              Informatics Engineering
              <br />
              <span className="text-gray-400 font-normal underline">
                Surabaya
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section
        id="services"
        className="px-8 md:px-24 py-24 bg-white relative overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-orange-100 border-b-8 border-orange-400 transform hover:-translate-y-2 transition duration-500">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <AiOutlineMonitor size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-400">
                Building robust websites using ReactJS, Laravel, and Node.js
                with modern features.
              </p>
              <button className="mt-8 text-orange-500 font-bold flex items-center gap-2 group italic">
                LEARN MORE{" "}
                <AiOutlineRight
                  size={18}
                  className="group-hover:translate-x-2 transition"
                />
              </button>
            </div>

            {/* Floating Info */}
            <div className="absolute -right-10 top-1/2 p-6 bg-white rounded-3xl shadow-2xl flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-orange-400"
                  ></div>
                ))}
              </div>
              <p className="text-xs font-bold text-gray-300">PENS STUDENT</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold leading-tight text-black">
              My Awesome <br />
              <span className="text-[#FCA61F]">Services</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Combining my hospitality background with technical expertise to
              build applications that are not just functional, but also
              user-centric.
            </p>
            <a
              href="/CV_FARKI.pdf"
              download="CV_Farki.pdf"
              className="bg-[#FCA61F] text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-orange-100 hover:scale-105 transition inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS / PORTFOLIO */}
      <section className="px-8 md:px-24 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-extrabold text-black">
            My <span className="text-[#FCA61F]">Projects</span>
          </h2>
          <p className="text-gray-400">
            Highlighting selected works from my studies and personal tech
            explorations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group overflow-hidden rounded-[40px] bg-white border border-gray-100 aspect-[4/5] flex flex-col p-6 shadow-xl hover:shadow-2xl transition duration-500">
            {/* Bagian Gambar (Di Atas & Mencolok) */}
            <div className="w-full flex-1 relative bg-emerald-50 rounded-3xl overflow-hidden mb-6 group-hover:-translate-y-2 transition duration-500 flex justify-center items-end">
              <img
                src={projectStudentFinance}
                alt="Student Finance App"
                className="w-4/5 h-[90%] object-contain object-bottom drop-shadow-2xl"
              />
            </div>
            {/* Bagian Teks & Link */}
            <div className="w-full text-left px-2 flex flex-col flex-1 pb-2">
              <div className="mb-2">
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">
                  Mobile App
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Student Finance
                </h3>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-3 mb-4">
                Built with Flutter & Firebase for tracking student expenses.
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Visit on:
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.budjet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white transition"
                  title="Play Store"
                >
                  <FaGooglePlay size={18} />
                </a>
                <a
                  href="https://github.com/LaluFarki/BudJet_APP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-black hover:text-white transition"
                  title="GitHub"
                >
                  <AiOutlineGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group overflow-hidden rounded-[40px] bg-white border border-gray-100 aspect-[4/5] flex flex-col p-6 shadow-xl hover:shadow-2xl transition duration-500">
            <div className="w-full flex-1 relative bg-orange-50 rounded-3xl overflow-hidden mb-6 group-hover:-translate-y-2 transition duration-500 flex justify-center items-center">
              <img
                src={projectLombokEats}
                alt="Lombok Eats"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full text-left px-2 flex flex-col flex-1 pb-2">
              <div className="mb-2">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">
                  AI & ML
                </p>
                <h3 className="text-2xl font-bold text-gray-900">Lombokeats</h3>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-3 mb-4">
                AI recognition for traditional Lombok cuisine.
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Visit on:
                </span>
                <button
                  className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-500 hover:text-white transition"
                  title="Link"
                >
                  <AiOutlineLink size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group overflow-hidden rounded-[40px] bg-white border border-gray-100 aspect-[4/5] flex flex-col p-6 shadow-xl hover:shadow-2xl transition duration-500">
            <div className="w-full flex-1 relative bg-purple-50 rounded-3xl overflow-hidden mb-6 group-hover:-translate-y-2 transition duration-500 flex justify-center items-center">
              <img
                src={projectswebsite}
                alt="Mafia Es Teh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full text-left px-2 flex flex-col flex-1 pb-2">
              <div className="mb-2">
                <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">
                  Web Portfolio
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Mafia Es Teh
                </h3>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-4 mb-4">
                A collaborative web development project from my first semester,
                featuring a promotional landing page for the 'Mafia Es Teh'
                franchise built with fundamental HTML and CSS
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Visit on:
                </span>
                <a
                  href="https://uasku-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition"
                  title="Vercel Link"
                >
                  <SiVercel size={18} />
                </a>
                <a
                  href="https://github.com/LaluFarki/Uasku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-black hover:text-white transition"
                  title="GitHub"
                >
                  <AiOutlineGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. TECHNICAL SKILLS */}
      <section className="px-8 md:px-24 py-12 bg-[#FDFBF9]">
        <div className="max-w-6xl mx-auto border border-gray-100 bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-orange-100/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-black">
              Technical <span className="text-[#FCA61F]">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C", "JavaScript", "PHP", "Dart (Flutter)"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:border-[#FCA61F] transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Front-End */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Front-End
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Bootstrap", "ReactJS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-bold text-blue-700 hover:border-blue-400 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-End & DB */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Back-End & DB
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Laravel",
                  "MySQL",
                  "Firebase",
                  "PostgreSQL",
                  "Supabase",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg text-xs font-bold text-orange-700 hover:border-orange-400 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Mobile Dev
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-700 hover:border-emerald-400 transition cursor-default">
                  Flutter
                </span>
              </div>
            </div>

            {/* Tools & Software */}
            <div className="space-y-3 lg:col-span-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "VS Code",
                  "Antigravity",
                  "Canva",
                  "DaVinci Resolve",
                  "CapCut",
                  "Microsoft Office",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg text-xs font-bold text-purple-700 hover:border-purple-400 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-3 md:col-span-2 lg:col-span-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-900 rounded-lg text-xs font-bold text-white">
                    Bahasa Indonesia
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Native
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-900 rounded-lg text-xs font-bold text-white">
                    English
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Fluent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="px-8 md:px-24 py-24">
        <div className="bg-white rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-gray-100">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCA61F] rounded-full -mr-10 -mt-10 opacity-10" />

          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-5xl font-extrabold leading-tight text-black">
              Ready To Get <br />
              <span className="text-[#FCA61F]">Started?</span>
            </h2>
            <p className="text-gray-400">
              Let's talk about your project or internship opportunity.
            </p>
          </div>

          <div className="mt-12 md:mt-0 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:laluhisyam03@gmail.com"
                className="bg-[#FCA61F] text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-2xl shadow-orange-200 hover:scale-105 transition active:scale-95 flex items-center justify-center gap-3"
              >
                <AiOutlineMail size={24} />
                Email Me
              </a>
              <a
                href="https://wa.me/6281990699500"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-2xl shadow-green-200 hover:scale-105 transition active:scale-95 flex items-center justify-center gap-3"
              >
                <AiOutlineWhatsApp size={24} />
                WhatsApp
              </a>
            </div>
            <div className="flex gap-4 text-gray-400 font-medium text-sm">
              <span>laluhisyam03@gmail.com</span>
              <span className="hidden sm:inline">•</span>
              <span>0819-9069-9500</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-24 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-100">
        <div className="text-xl font-bold">
          Hisyam<span className="text-[#FCA61F]">Studio</span>
        </div>
        <div className="text-gray-400 text-sm">
          © 2026 Lalu Moh Hisyam Farki. All rights reserved.
        </div>
        <div className="flex gap-8 font-bold text-sm">
          <a
            href="https://www.linkedin.com/in/lalu-moh-hisyam-farki-034886300/"
            className="hover:text-[#FCA61F]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/LaluFarki"
            className="hover:text-[#FCA61F]"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/lalufarki_?igsh=enluYnQ5dzV2bGFx"
            className="hover:text-[#FCA61F]"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
