import React from "react";
import {FaFreeCodeCamp, FaHtml5, FaReact, FaShopify, FaTeamspeak,FaBriefcase} from "react-icons/fa";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  place,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400 text-xl">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 text-slate-300 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
         
         <p className="text-slate-400 font-mono pb-2">{place}</p>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
     {
      icon: FaShopify,
      title: "Shopify Developer",
      company: "WeDesign Tech Pvt Ltd",
      place:"Coimbatore",
      period: "May 23 - present",
      description:
     (
      <ul className="list-disc pl-5 space-y-1">
        
        <li>Customized storefronts using <i className="text-white">HTML5, CSS3, Bootstrap 5, JavaScript, and Liquid </i> by writing clean, maintainable code.</li>
        <li> I developed multiple	premium themes based on <i className="text-white">Converted Figma/PSD designs into pixel-perfect, responsive Shopify themes.</i></li> 
        <li>I Worked extensively on Shopify 2.0 framework,<i className="text-white"> building scalable theme Framework</i> with support for product, collection, blog templates, AJAX cart, and dynamic filtering.</li>
        <li> I’ve also handled <i className="text-white"> dynamic & custom sections, blocks,
            third-party app integrations, custom metafields, checkout customizations, and payment gateway </i>
						setups delivering complete end-to-end solutions for e-commerce businesses.</li>
        <li>Developed and submitted a versatile Shopify theme with customization options to ThemeForest, achieving 80+ sales within 6 months.</li>
        <li>Optimized website performance for SEO and debugged issues across devices and browsers.</li>        
        <li> I'm currently building a Shopify theme with <i className="text-white from-neutral-500">Horizon framework and AI integration</i> for smarter, user-focused e-commerce</li>
      </ul>
    )
    },
    {
      icon: FaReact,
      title: "React Developer",
      company: "Sporting India Tech Solutions",
      place:"Coimbatore",
      period: "Apr 22 - May 23",
      description:
       (<ul className="list-disc pl-5 space-y-1">
  <li>Designed and developed multi-step registration forms and login forms using <i className="text-white">HTML5, CSS3, Bootstrap 5, and React.js</i> with cross-browser compatibility.</li>
  <li>Built <i className="text-white">Reusable React components</i> for UI consistency and maintainability.</li>
  <li>Implemented routing using <i className="text-white">React Router</i> for seamless navigation.</li>
  <li>Handled form validations using <i className="text-white">React Hooks,Use State,Use Effect and controlled components.</i></li>
  <li>Developed for athletic and sports federation websites with a focus on performance and user experience.</li>
</ul>)
    },
   
     {
      icon: FaHtml5,
      title: "Freelancer",
      company: "EMTS , Fivver",
      place:"Tirupur / Globally",
      period: "Aug 22 - present",
      description:
     (
      <ul className="list-disc pl-5 space-y-1">
  <li>Developed responsive websites using HTML5, CSS3, Bootstrap5, JavaScript.</li>
  <li>Converted Figma/PSD designs into pixel-perfect, mobile-friendly UIs for e-commerce and static sites.</li>
  <li>Shopify themes are created dynamic sections, blocks, and metafields in Shopify for flexible content management.</li>
  <li>Integrated third-party apps, payment gateways, and ensured cross-browser compatibility.</li>
</ul>
    )
    },
     {
      icon: FaBriefcase,
      title: "Internship - MERN Stack",
      company: "Edureka Internship Programming",
      place:"Bangalore - online",
      period: "Nov 21 - Apr 22",
      description:
     (
      <ul className="list-disc pl-5 space-y-1">
  <li>Completed a web development internship under Edureka's industry program, gaining hands-on experience building real-world projects from scratch.</li>
<li>Developed a fully responsive food delivery website (Zomato clone) using HTML5, CSS3, Bootstrap 5, JavaScript, React.js, Node.js,MangoDB and Express.js(basic)</li>
<li>Learned to plan UI layout, structure reusable components, and manage state effectively in React.</li>
<li>Focused on clean code, responsiveness, and cross-browser compatibility throughout the project lifecycle.</li>
</ul>
    )
    },
    {
      icon: FaTeamspeak,
      title: "Customer Relationship Manager",
      company: "Aravind Honda",
      place:"Sathyamangalam",
      period: "2016 - 2020",
      description:
       (
        <ul className="list-disc pl-5 space-y-1">
          <li>Managed 2000+ customer records using CRM software, generated reports in Advanced Excel, and contributed to increased revenue.</li>
        </ul>
       ),
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
