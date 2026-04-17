/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Users, 
  ChevronRight,
  Download,
  FileText,
  BarChart3,
  Database,
  Layout,
  Search,
  Sparkles
} from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import profileImg from './images/profile.jpeg';
import resumePDF from './images/Bavana_Ajithkumar_CV__.pdf';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setMessageSent(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div className="min-h-screen grid-bg selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <CustomCursor />
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/25 rounded-full blur-[120px] animate-float-complex" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-fuchsia-600/25 rounded-full blur-[130px] animate-float-complex-delayed" />
        <div className="absolute top-[30%] right-[15%] w-[30rem] h-[30rem] bg-rose-600/25 rounded-full blur-[110px] animate-float-complex-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-[35rem] h-[35rem] bg-emerald-600/25 rounded-full blur-[120px] animate-float-complex" />
        
        {/* Floating Shapes */}
        <div className="absolute top-[15%] left-[20%] w-12 h-12 border-2 border-blue-400/20 rounded-lg animate-float-rotate floating-shape" />
        <div className="absolute bottom-[25%] right-[25%] w-16 h-16 border-2 border-purple-400/20 rounded-full animate-float-rotate floating-shape" />
        <div className="absolute top-[60%] left-[5%] w-8 h-8 bg-indigo-400/10 rotate-45 animate-float-rotate floating-shape" />
        
        {/* Twinkling Stars */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Subtle Moving Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-black text-2xl tracking-tighter text-slate-900"
          >
            BAVANA<span className="text-blue-600">.</span>
          </motion.span>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
            {['About', 'Experience', 'Skills', 'Certifications'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-24">
        
        {/* Hero Section */}
        <section id="hero" className="relative pt-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black mb-8 shadow-lg shadow-blue-200 uppercase tracking-widest"
              >
                <Sparkles size={14} />
                MSc Management Consultancy
              </motion.div>
              
              <h1 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
                Bavana <br />
                <span className="gradient-text">Ajithkumar</span>
              </h1>
              
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
                Bridging <span className="text-blue-600 font-bold">Artificial Intelligence</span> with 
                <span className="text-indigo-600 font-bold"> Management Strategy</span> to deliver 
                data-driven business excellence at <span className="text-slate-900">UCD Smurfit</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-300 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group"
                >
                  View My Portfolio 
                  <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a 
                  href={resumePDF}
                  download="Bavana_Ajithkumar_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black hover:border-blue-400 transition-all flex items-center justify-center gap-3 shadow-sm"
                >
                  Get Resume <Download size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Photo Space - Inspired by Reference */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px]">
                {/* Background Accents */}
                <div className="absolute inset-0 bg-radial-sun animate-pulse" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
                
                {/* Decorative Pill Shapes */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 -left-12 z-20 pill-accent bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                >
                  Dublin, IE
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-20 -right-12 z-20 pill-accent bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                >
                  PwC Consultant
                </motion.div>

                {/* Main Photo Container */}
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-10">
                  <img 
                    src={profileImg}
                    alt="Bavana Ajithkumar" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>

                {/* Floating Geometric Element */}
                <a href="https://www.linkedin.com/in/bavana-ajith/" target="_blank" rel="noopener noreferrer" className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-3xl shadow-xl z-20 flex items-center justify-center border border-slate-100 hover:shadow-2xl hover:shadow-blue-200 transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                    <Linkedin size={24} />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="about" className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-blue-600 font-black tracking-widest text-xs uppercase">Academic Foundation</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                year: "2025 — 2026",
                title: "MSc Management Consultancy",
                school: "UCD Michael Smurfit Graduate Business School, Dublin",
                focus: "Business Analytics, Client Engagement, AI Applications in Consulting",
                accent: "blue"
              },
              {
                year: "2021 — 2025",
                title: "BTech AI & Data Science",
                school: "Chennai Institute of Technology, India (First Class)",
                focus: "International Exchange: KRIRK University, Thailand",
                accent: "violet"
              }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group hover-glow"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-${edu.accent}-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-125`} />
                <div className={`text-${edu.accent}-600 font-black text-sm mb-4 tracking-widest uppercase`}>{edu.year}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{edu.title}</h3>
                <p className="text-slate-500 font-bold mb-6">{edu.school}</p>
                <div className="flex items-start gap-3 p-4 bg-white/30 rounded-2xl border border-white/20">
                  <div className={`mt-1.5 h-2 w-2 rounded-full bg-${edu.accent}-500 shrink-0 shadow-lg shadow-${edu.accent}-500/50`} />
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{edu.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-indigo-600 font-black tracking-widest text-xs uppercase">Professional Journey</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Experience</h2>
          </div>

          <div className="relative space-y-10 pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="timeline-line hidden md:block" />
            
            {[
              {
                company: "PwC Ireland",
                role: "Student Consultant",
                period: "Jan 2026 – Present",
                desc: "Conducted research on AI adoption in Irish consultancy firms to enhance client engagement. Produced a 20-page report and executive presentation for senior Technology Consulting stakeholders.",
                tag: "Consulting",
                color: "red"
              },
              {
                company: "CFGI, Ireland",
                role: "Student Consultant",
                period: "Nov 2025",
                desc: "Analysed 30+ CFO advisory firms; built Excel heatmaps and competitor coverage reports. Presented insights to clients, influencing understanding of market positioning.",
                tag: "Advisory",
                color: "blue"
              },
              {
                company: "MBA & Beyond, Singapore",
                role: "Communications for Revenue Intern",
                period: "Jun 2024 – Aug 2024",
                desc: "Maintained CRM data and dashboards, improving lead response efficiency by 15%.",
                tag: "CRM",
                color: "emerald"
              },
              {
                company: "RPA Infotech Pvt Ltd, India",
                role: "Lead Generation Intern",
                period: "Jul 2023 – Dec 2023",
                desc: "Maintained 500+ B2B leads, improving tracking accuracy by 20%. Streamlined lead process to enhance data consistency and reporting efficiency.",
                tag: "Lead Gen",
                color: "orange"
              },
              {
                company: "Tata Consultancy Services, India",
                role: "Project Intern",
                period: "Jun 2023 – Jul 2023",
                desc: "Developed predictive models estimating patient hospital stay using ML; created visual reports.",
                tag: "Machine Learning",
                color: "indigo"
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="experience-card-wrapper group relative"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot top-12" />
                
                <div className={`glass-card p-10 rounded-[2.5rem] hover-glow flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'}`}>
                  <div className="shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-${exp.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                      <Briefcase className={`text-${exp.color}-600`} size={28} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                        <p className="text-lg font-bold text-slate-400">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm font-black text-slate-400 tracking-widest uppercase">{exp.period}</span>
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-${exp.color}-50/50 border-${exp.color}-100 text-${exp.color}-600`}>
                          {exp.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-medium text-lg">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 font-black tracking-widest text-xs uppercase">Core Competencies</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                skills: ["Excel", "Power BI", "Google Sheets", "PowerPoint", "Data Visualization"],
                color: "blue"
              },
              {
                icon: Database,
                title: "Tools & Platforms",
                skills: ["HubSpot", "Notion", "Trello", "Asana", "CRM Management"],
                color: "indigo"
              },
              {
                icon: Search,
                title: "Core Strengths",
                skills: ["Data Accuracy", "Documentation", "Research", "Problem-solving", "Organization"],
                color: "emerald"
              }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="glass-card p-10 rounded-[2.5rem] space-y-8 hover-glow"
              >
                <div className={`p-4 bg-${category.color}-50 text-${category.color}-600 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-slate-600 rounded-xl text-sm font-bold border border-white/50 hover:bg-white hover:border-blue-200 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-amber-600 font-black tracking-widest text-xs uppercase">Verified Achievements</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Machine Learning", issuer: "Stanford Online", date: "2021" },
              { title: "Digital Marketing", issuer: "Google Garage", date: "2021" },
              { title: "Creative Thinking", issuer: "Imperial College", date: "2021" },
              { title: "Data Analysis", issuer: "Great Learning", date: "2021" },
              { title: "AWS ML", issuer: "AWS / Coursera", date: "2021" },
              { title: "Strategy Consulting", issuer: "BCG / Forage", date: "2024" },
              { title: "Project Management", issuer: "CBRE / Forage", date: "2025" },
              { title: "Strategy & Consultant", issuer: "Accenture", date: "2025" }
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between gap-6 group cursor-pointer hover-glow"
              >
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base leading-tight mb-2 group-hover:text-blue-600 transition-colors">{cert.title}</h4>
                  <div className="flex justify-between items-end">
                    <p className="text-xs text-slate-400 font-bold">{cert.issuer}</p>
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-purple-600 font-black tracking-widest text-xs uppercase">Impact & Community</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "TEDx Speaker", sub: "Sustainability & Consumer Behaviour", icon: "TEDx", color: "red" },
              { title: "Vice President", sub: "IEEE Student Branch", icon: "IEEE", color: "blue" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="glass-card p-10 rounded-[2.5rem] flex items-center gap-10 hover-glow group"
              >
                <div className={`w-24 h-24 bg-${item.color}-50 rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform shadow-sm`}>
                  <span className={`text-${item.color}-600 font-black text-2xl`}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-lg text-slate-500 font-bold">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="pt-16 pb-16 border-t border-slate-200/50">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-6xl font-black text-slate-900 mb-8 leading-[0.95]">
                Let's build the <br />
                <span className="text-blue-600">future together.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12 max-w-md font-medium leading-relaxed">
                Open for strategic consulting roles and data-driven business opportunities.
              </p>
              <div className="flex gap-6">
                {[
                  { Icon: Linkedin, link: 'https://www.linkedin.com/in/bavana-ajith/' },
                  { Icon: Mail, link: 'mailto:bavanaajith03@gmail.com' }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={item.link}
                    target={item.Icon === Linkedin ? '_blank' : '_self'}
                    rel={item.Icon === Linkedin ? 'noopener noreferrer' : ''}
                    className="p-5 bg-white/50 backdrop-blur-md border border-white/50 rounded-2xl text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all"
                  >
                    <item.Icon size={32} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="contact-card p-12 rounded-[3rem]">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900" placeholder="Jane Cooper" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-6 py-4 bg-white/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 h-40 resize-none" placeholder="How can we collaborate?"></textarea>
                </div>
                {messageSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-100 border border-green-300 rounded-2xl text-green-800 font-bold text-center"
                  >
                    ✓ Message Sent Successfully!
                  </motion.div>
                )}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  {messageSent ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-200/30 text-sm text-slate-400 font-black tracking-widest uppercase">
            <p>© 2026 Bavana Ajithkumar</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
