/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
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
  Sparkles,
  Camera,
  Heart,
  Globe,
  Quote
} from 'lucide-react';

import CustomCursor from './components/CustomCursor';

const fadeInUp = {
  initial: { opacity: 0, y: 60, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen grid-bg selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <CustomCursor />
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-blue-600/20 rounded-full blur-[150px] animate-float-complex" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55rem] h-[55rem] bg-fuchsia-600/20 rounded-full blur-[160px] animate-float-complex-delayed" />
        <div className="absolute top-[30%] right-[15%] w-[40rem] h-[40rem] bg-rose-600/20 rounded-full blur-[140px] animate-float-complex-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-[45rem] h-[45rem] bg-emerald-600/20 rounded-full blur-[150px] animate-float-complex" />
        
        {/* Floating Shapes */}
        <div className="absolute top-[15%] left-[20%] w-12 h-12 border-2 border-blue-400/20 rounded-lg animate-float-rotate floating-shape" />
        <div className="absolute bottom-[25%] right-[25%] w-16 h-16 border-2 border-purple-400/20 rounded-full animate-float-rotate floating-shape" />
        <div className="absolute top-[60%] left-[5%] w-8 h-8 bg-indigo-400/10 rotate-45 animate-float-rotate floating-shape" />
      </div>

      {/* Navigation */}
      <nav className="glass-nav px-4 sm:px-8">
        <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-black text-xl sm:text-2xl tracking-tighter text-slate-900 group"
          >
            BAVANA<span className="text-blue-600 group-hover:text-rose-600 transition-colors">.</span>
          </motion.span>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-widest">
            {['About', 'Creative', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-all relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/bee.and.beyond/" target="_blank" rel="noreferrer" className="p-2 hover:text-rose-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bavana-ajith/" target="_blank" rel="noreferrer" className="p-2 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-32 space-y-24 sm:space-y-48">
        
        {/* Hero Section */}
        <section id="hero" className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 rounded-full bg-slate-900 text-white text-[9px] sm:text-[10px] font-black mb-6 sm:mb-8 shadow-2xl uppercase tracking-[0.3em]"
              >
                <Sparkles size={14} className="text-blue-400" />
                Strategic Innovator & Creator
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6 sm:mb-8 leading-[0.9] uppercase break-words">
                Bavana <br />
                <span className="gradient-text">Ajithkumar</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-500 mb-8 sm:mb-12 leading-relaxed max-w-xl font-bold">
                Connecting <span className="text-blue-600">dots</span>, building <span className="text-rose-600">meaning</span>, and redefining <span className="text-slate-900 underline decoration-indigo-500">strategy</span> between AI & Human Consultancy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <motion.a 
                  href="#experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-12 py-5 sm:py-6 bg-blue-600 text-white rounded-full font-black shadow-2xl shadow-blue-300 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-xs"
                >
                  My Work & Story
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="/Bavana_Ajithkumar_CV__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-12 py-5 sm:py-6 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-black hover:border-blue-400 transition-all flex items-center justify-center gap-3 shadow-sm uppercase tracking-widest text-xs"
                >
                  Download CV <Download size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Photo Space - Large & Creative */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative lg:mt-0 mt-20"
            >
              <div className="relative aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto">
                {/* Abstract Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-400/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
                
                {/* Floating Labels */}
                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-6 -left-4 sm:-left-12 z-30 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 max-w-[150px] sm:max-w-[200px]"
                >
                  <p className="text-[9px] sm:text-[10px] uppercase font-black text-blue-600 mb-1 sm:mb-2 tracking-widest">Currently</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">UCD Smurfit Management Consultant</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-12 -right-4 sm:-right-12 z-30 bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl shadow-indigo-500/20 max-w-[150px] sm:max-w-[200px] text-white"
                >
                  <p className="text-[9px] sm:text-[10px] uppercase font-black text-rose-400 mb-1 sm:mb-2 tracking-widest">Collaborative</p>
                  <p className="text-xs sm:text-sm font-bold leading-tight">25+ Brands in Ireland & India</p>
                </motion.div>

                <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] z-20 border-white border-[12px]">
                  <img 
                    src="images/profile.jpeg" 
                    alt="Bavana Ajithkumar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Story Section - Personal Branding Focus */}
        <section id="about" className="py-12 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <motion.div className="lg:col-span-4 lg:sticky lg:top-32" {...fadeInUp}>
              <h2 className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                MY <span className="text-blue-600">STORY.</span>
              </h2>
              <div className="h-2 w-20 bg-rose-600 rounded-full" />
            </motion.div>
            
            <motion.div className="lg:col-span-8 space-y-8 sm:space-y-12" {...fadeInUp}>
              <div className="space-y-6 sm:space-y-8 text-xl sm:text-2xl md:text-3xl font-bold text-slate-600 leading-relaxed tracking-tight">
                <p>
                  I started out in tech with <span className="text-slate-900 border-b-4 border-blue-600/30 font-black">machine learning, data science, and code</span>. I was good at it. But I kept asking the same question: <span className="italic text-slate-400">"So what does this actually change?"</span>
                </p>
                <p>
                  That question brought me from Chennai to Dublin, and from AI to <span className="text-indigo-600 underline">Management Consultancy</span>. Not because I wanted to leave tech, but because I wanted it to mean something beyond the screen.
                </p>
                <div className="personal-quote bg-white/40 p-8 rounded-3xl">
                  <Quote size={40} className="text-blue-600 mb-4 opacity-50" />
                  I'm usually the person connecting the dots — between people, between ideas, between teams that are talking past each other. I don't always have the loudest voice in the room, but I tend to notice what others miss.
                </div>
                <p>
                  PwC, TEDx, Thailand, Dublin — none of it was a straight line. It was just me following the questions that wouldn't leave me alone.
                </p>
                <p className="text-4xl text-slate-900 font-black tracking-tighter">
                  Still doing that.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Influencer & Brand Collaborations Section */}
        <section id="creative" className="space-y-12 sm:space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-600 font-black tracking-widest text-[9px] sm:text-[10px] uppercase">
                <Instagram size={16} /> Digital Creator & Collaborator
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
                Brands & <span className="gradient-text">Creative.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-lg sm:text-xl font-bold text-slate-500 leading-relaxed">
                I've collaborated with <span className="text-rose-600">25+ Irish and Indian brands</span> in Ireland, blending professional strategy with creative storytelling.
              </p>
            </div>
          </div>

          <div className="marquee-container">
            <div className="marquee-content">
              {['flowers.ie', 'The Exchange Dublin', 'Lucky Tortoise', 'Sheela Palace Lucan', 'Anjappar', 'Chimac', '25+ Brands'].map((brand) => (
                <span key={brand} className="text-4xl md:text-5xl font-black text-slate-300 hover:text-rose-600 transition-colors uppercase tracking-tighter shrink-0 cursor-default px-4">
                  {brand}
                </span>
              ))}
            </div>
            {/* Mirror for continuous flow */}
            <div className="marquee-content" aria-hidden="true">
              {['flowers.ie', 'The Exchange Dublin', 'Lucky Tortoise', 'Sheela Palace Lucan', 'Anjappar', 'Chimac', '25+ Brands'].map((brand) => (
                <span key={brand} className="text-4xl md:text-5xl font-black text-slate-300 hover:text-rose-600 transition-colors uppercase tracking-tighter shrink-0 cursor-default px-4">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {[
              { img: "images/c1.jpeg", tag: "Food Branding", title: "Chimac & Anjappar" },
              { img: "images/c2.jpeg", tag: "Fashion Story", title: "Irish Label Collaborations" },
              { img: "images/c3.jpeg", tag: "Lifestyle", title: "The Exchange Dublin" },
              { img: "images/c4.jpeg", tag: "Community", title: "Dublin Social Scene" },
              { img: "images/c5.jpeg", tag: "Student Exchange", title: "KRIRK university , Thailand" }
          
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="group relative cursor-pointer"
              >
                <div className="image-card aspect-square">
                  <img src={item.img} alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-2">{item.tag}</span>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 py-12">
            <div className="glass-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-rose-50/30 border-rose-100">
              <Camera size={32} className="text-rose-600 mb-6" />
              <h3 className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2">25+</h3>
              <p className="font-bold text-slate-600 text-sm sm:text-base">Personal Brand Collaborations across Ireland.</p>
            </div>
            <div className="glass-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-blue-50/30 border-blue-100">
              <Heart size={32} className="text-blue-600 mb-6" />
              <h3 className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2">10k+</h3>
              <p className="font-bold text-slate-600 text-sm sm:text-base">Monthly reach through authentic storytelling.</p>
            </div>
            <div className="glass-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-indigo-50/30 border-indigo-100">
              <Globe size={32} className="text-indigo-600 mb-6" />
              <h3 className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2">Cross-Borders</h3>
              <p className="font-bold text-slate-600 text-sm sm:text-base">Connecting Indian brands with Irish consumers.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12 sm:space-y-20 pt-16 sm:pt-24 border-t border-slate-200/50">
          <div className="flex flex-col gap-4">
            <span className="text-indigo-600 font-black tracking-[0.3em] text-[10px] uppercase">The Track Record</span>
            <h2 className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter leading-none">Experience.</h2>
          </div>

          <div className="relative space-y-8 sm:space-y-12 pl-8 md:pl-0">
            <div className="timeline-line hidden md:block" />
            {[
              {
                company: "PwC Ireland",
                role: "Student Consultant",
                period: "2026 – Present",
                desc: "Analysing AI adoption in Irish consultancy firms. High-stakes reporting for senior Technology Consulting leadership.",
                color: "red"
              },
              {
                company: "CFGI, Ireland",
                role: "Student Consultant",
                period: "2025",
                desc: "Strategic advisory for 30+ CFO firms. Excel heatmaps & competitor coverage reporting.",
                color: "blue"
              },
              {
                company: "MBA & Beyond, Singapore",
                role: "Revenue & CRM Intern",
                period: "Jun 2024 – Aug 2024",
                desc: "Organised 500+ B2B prospects into structured outreach pipelines; delivered insightsto optimise sales and customer success initiatives.",
                color: "blue"
              },
              {
                company: " RPA Infotech, India",
                role: "Lead Generation Intern",
                period: "Jul 2023 – Dec 2023",
                desc: "Increased lead conversion by ~15% through structured CRM follow-ups and segmentation strategies.",
                color: "blue"
              },
              {
                company: "TEDx Speaker",
                role: "Invited Speaker",
                period: "2023",
                desc: "Presented on the intersection of Sustainability and Consumer Behaviour to 500+ attendees.",
                color: "purple",
                link: "https://youtu.be/hrXCrly-E3s?si=3TlmWypyWBq6VhmE"
              },
              {
                company: " Tata Consultancy Services, India",
                role: "Project Intern",
                period: "Jun 2023 – Jul 2023",
                desc: "* Supported data analysis and documentation for a healthcare consulting project, contributing to client reporting deliverables.",
                color: "blue"
              },
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="experience-card-wrapper group relative"
              >
                <div className="timeline-dot top-12" />
                <div className={`glass-card p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] flex flex-col md:flex-row gap-8 sm:gap-10 items-center ${idx % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%]'}`}>
                  <div className={`w-20 h-20 rounded-3xl bg-${exp.color}-50 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform`}>
                    <Briefcase className={`text-${exp.color}-600`} size={32} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-3xl font-black text-slate-900 my-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-xl font-bold text-slate-400 mb-4">{exp.company}</p>
                    <p className="text-slate-600 leading-relaxed font-medium mb-6">{exp.desc}</p>
                    
                    {exp.link && (
                      <motion.a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all shadow-xl shadow-slate-200"
                      >
                        Watch Talk <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="pt-16 sm:pt-32 pb-16">
          <div className="glass-card p-8 sm:p-16 md:p-24 rounded-[3rem] sm:rounded-[4rem] bg-white border-slate-200 text-slate-900 overflow-hidden relative shadow-2xl shadow-blue-100">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
              <div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 sm:mb-10 leading-[0.85] uppercase tracking-tighter">
                  Let's <br />
                  <span className="text-blue-600 underline decoration-rose-500 underline-offset-8">Consult.</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Email Me</p>
                      <p className="text-sm sm:text-xl font-bold text-slate-900 truncate">bavana.ajithkumar@ucdconnect.ie</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all text-rose-600 shrink-0">
                      <Instagram size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Instagram</p>
                      <p className="text-sm sm:text-xl font-bold text-slate-900 hover:text-rose-600 transition-colors truncate">@bee.and.beyond</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ajithkumar" 
                    className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Inquiry Details</label>
                  <textarea 
                    placeholder="Tell me about your project or opportunity" 
                    className="w-full px-8 py-6 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-slate-900 h-40 resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-slate-900 hover:bg-rose-600 text-white rounded-3xl font-black text-xl transition-all shadow-2xl"
                >
                  Send Inquiry
                </motion.button>
              </form>
            </div>
            
            <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <p>© 2026 BAVANA AJITHKUMAR</p>
              <div className="flex gap-12 text-slate-400">
                <a href="https://www.linkedin.com/in/bavana-ajith/" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/bee.and.beyond/" className="hover:text-rose-600 transition-colors">Instagram</a>
                
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

