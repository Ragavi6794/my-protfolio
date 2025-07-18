import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, GitBranch} from "lucide-react";
import { AiFillCode,AiOutlineSetting } from 'react-icons/ai';
import { BiPlug,BiErrorCircle} from 'react-icons/bi';
import { MdTimer, MdCheckCircleOutline } from 'react-icons/md';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaShopify,
  FaBootstrap,FaFileExcel,
  FaPuzzlePiece, FaCreditCard, FaRobot ,FaGlobeAfrica

} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiFirebase,
  SiVercel,
  SiVite,SiBootstrap
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
         {
          name: "Boostarp5",
          icon: <SiBootstrap className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Javascript",
          icon: <SiJavascript className="w-4 h-4 text-white" />,
        },
        {
          name: "Cross Browser Compatible",
          icon: <FaGlobeAfrica className="w-4 h-4 text-[#38B2AC]" />,
        },
            
      ],
    },
    {
      icon: FaShopify,
      title: "Shopify Development",
      color: "text-green-400",
      skills: [
        {
          name: "Liquid template lang",
          icon: <AiFillCode className="w-4 h-4 text-[#65b7fa]" />,
        },
         {
          name: "App/API Integerate",
          icon: <BiPlug className="w-4 h-4 text-[#69f346]" />,
        },
        {
          name: "Custom Metafield",
          icon: <FaPuzzlePiece className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Payment Gateway",
          icon: <FaCreditCard className="w-4 h-4 text-[#c1c435]" />,
        },
        {
          name: "Headless E-commerce",
          icon: <FaReact className="w-4 h-4 text-[#339165]" />,
        },
       
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        // {
        //   name: "Shopify CLI",
        //   icon: <GitBranch className="w-4 h-4 text-[#41f86e]" />,
        // },
      ],
    },
    {
      icon: FaReact,
      title: "React Developement",
      color: "text-blue-700",
      skills: [
       { name: "React.js", 
        icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />
       },
        
        {
          name: "UseState",
          icon: <AiOutlineSetting className="w-4 h-4 text-[#FF6C37]" />,
        },
         {
          name: "Use Effect",
          icon: <MdTimer className="w-4 h-4 text-[#FF6C37]" />,
        },
         {
          name: "Hooks",
          icon: <BsFillBookmarkCheckFill className="w-4 h-4 text-[#FF6C37]" />,
        },
         {
          name: "Form Validation",
          icon: <MdCheckCircleOutline className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Convert Figma into pixel-perfect code", 
          icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
         
      ],
    },
     
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
         { name: "Git", 
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Agile", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Chatgpt",
          icon: <FaRobot className="w-4 h-4 text-[#8DD6F9]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        {
          "name":"Ms office",
          "icon":<FaFileExcel className="w-4 h-4 text-green-600"/>
        }
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "SVG Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Debugger",
          icon: <BiErrorCircle className="w-4 h-4 text-[#fa3838]" />,
        },
       
        {
          name: "Creative thinker",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Adapt new techie",
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
