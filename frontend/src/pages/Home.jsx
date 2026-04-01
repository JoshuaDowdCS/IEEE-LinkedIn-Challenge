import React from 'react';
import { 
  Gift, 
  TrendingUp, 
  Users, 
  Linkedin, 
  ArrowRight, 
  Instagram, 
  ChevronRight, 
  Mail, 
  Award 
} from 'lucide-react';
import { motion } from 'framer-motion';

const clubs = [
  { name: "Chapman Robotics", desc: "Chapman Robotics is dedicated to empowering students to dive deeper into the world of robotics through general meetings, projects, and competitions.", handle: "@chapmanrobotics", link: "https://www.instagram.com/chapmanrobotics/" },
  { name: "Chapman Entrepreneurship Organization", desc: "More than just a network—a community dedicated to growth, innovation, and success, equipping aspiring entrepreneurs with the knowledge, connections, and resources to bring their ideas to life.", handle: "@chapman__entrepreneurs", link: "https://www.instagram.com/chapman__entrepreneurs" },
  { name: "Computer Science Club", desc: "Chapman Computer Science Club brings together students interested in computer science and gives them a place to connect, collaborate, and learn.", handle: "@chapmancsclub", link: "https://www.instagram.com/chapmancsclub/" },
  { name: "Data Analytics Association", desc: "The Data Analytics Association welcomes Chapman students of all years and experience levels to connect with industry experts and build professional networks.", handle: "@daa_chapmanu", link: "https://www.instagram.com/daa_chapmanu/" },
  { name: "Girls Who Code", desc: "GWC’s mission is to inspire and equip girls with the necessary computing skills and confidence to pursue opportunities in the 21st century.", handle: "@chapman.gwc", link: "https://www.instagram.com/chapman.gwc/" },
  { name: "Math Club", desc: "Math Club explores the intricacies of math in our daily lives and how it shapes the way we see the world. We share this knowledge with Chapman students of all majors to help them integrate mathematical thinking into their own lives.", handle: "", link: "" },
  { name: "Panther Devs", desc: "Panther Devs is a club for game development at Chapman University hosting workshops, game jams, and other events for students.", handle: "@pantherdevs", link: "https://www.instagram.com/pantherdevs/" },
  { name: "Physics Club", desc: "The Chapman University Physics Club aims to dive into mysteries of the universe and rekindle a deep appreciation for physics among students.", handle: "@cu_physics_club", link: "https://www.instagram.com/cu_physics_club/" },
  { name: "Society of Women Engineers", desc: "The Society of Women Engineers (SWE) is a student organization at Chapman University that strives to empower women in the field of engineering.", handle: "@swe.cu", link: "https://www.instagram.com/swe.cu/" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-blue-500/30 font-sans selection:text-blue-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-8">
              <Linkedin className="w-4 h-4" />
              <span>Starting April 6th</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              The IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">LinkedIn Challenge</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-neutral-400 mb-12">
              Post creatively once a week, connect with 9+ clubs across campus, and grow your professional brand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://magenta-pumpkin-458.notion.site/32a61c43500a8091a66dd461db62f097?pvs=105" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://magenta-pumpkin-458.notion.site/32a61c43500a802a9d12cb1a6def9d21?pvs=105" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10">
                Submit Weekly Post
                <TrendingUp className="w-5 h-5" />
              </a>
              <a href="#details" className="w-full sm:w-auto px-8 py-3 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Sections */}
      <section id="details" className="py-24 bg-neutral-900/50 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">What & Why?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Post on LinkedIn once a week for April starting Apr. 6th. Share your thoughts, projects, or insights! It's a fantastic way to improve your professional portfolio and build incredible connections with peers.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">The Prizes</h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                We are giving away <strong>two $40 gift cards!</strong>
              </p>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>One for the <strong>most growth</strong> on LinkedIn.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>One for the <strong>highest quality</strong> & most interesting posts (judged).</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">How To Participate</h3>
              <ul className="space-y-4 text-neutral-400 relative">
                <div className="absolute left-3.5 top-2 bottom-2 w-px bg-white/10" />
                <li className="flex gap-4 relative">
                  <div className="w-7 h-7 rounded-full bg-neutral-800 border-2 border-purple-500/50 flex items-center justify-center text-xs font-bold text-white z-10 shrink-0">1</div>
                  <div className="pt-1">
                    <a href="https://magenta-pumpkin-458.notion.site/32a61c43500a8091a66dd461db62f097?pvs=105" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">Fill out the signup form</a> with your Chapman email & LinkedIn URL.
                  </div>
                </li>
                <li className="flex gap-4 relative">
                  <div className="w-7 h-7 rounded-full bg-neutral-800 border-2 border-purple-500/50 flex items-center justify-center text-xs font-bold text-white z-10 shrink-0">2</div>
                  <div className="pt-1">
                    <a href="https://magenta-pumpkin-458.notion.site/32a61c43500a802a9d12cb1a6def9d21?pvs=105" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">Log your weekly post</a> by <strong>Sunday at 11:59 PM</strong> to verify you are still active!
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clubs & Community */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-white">Who is participating?</h2>
              <p className="text-xl text-neutral-400">
                We have <span className="text-white font-medium">9 different clubs</span> participating across campus! Leverage this unique cross-club opportunity to connect and network.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <motion.div 
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{club.name}</h4>
                {club.desc && <p className="text-sm text-neutral-400 mb-4">{club.desc}</p>}
                {club.handle && club.link && (
                  <a href={club.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <Instagram className="w-4 h-4" />
                    {club.handle}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-blue-600/10 border border-blue-500/20 p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stay Updated</h2>
            <p className="text-neutral-300 mb-8 max-w-lg mx-auto relative z-10">
              Follow updates on the challenge via Instagram and stay connected.
            </p>
            <div className="flex justify-center gap-4 relative z-10">
              <a href="https://www.instagram.com/chapmanieee/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 text-pink-300 transition-colors flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5" />
                @chapmanieee
              </a>
            </div>

            <hr className="my-10 border-white/10" />

            <div className="relative z-10">
              <p className="text-sm font-medium text-neutral-400 mb-2">Have another question?</p>
              <a href="mailto:kgarg@chapman.edu" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Krish Garg
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
