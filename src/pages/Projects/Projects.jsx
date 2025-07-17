import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {FaReact, FaShopify} from "react-icons/fa";


const projects = [
   {
    title: "Glamora - Jewellery Store Shopify 2.0",
    subtitle:"Shopify store - 2.0",
    description:(
<ul className="list-disc pl-5 space-y-1">
<li>Glamorous jewellery with responsive Shopify theme with <span className="text-white font-bold-300">custom sections and blocks, built independently developed using HTML, CSS, JS and Liquid.</span></li>
<li>Achieved <span className="text-white font-bold-300">80+ sales</span> on ThemeForest within 6 months and significantly increasing company revenue 💻✨.</li>
</ul>  
),
    src: "glamora.jpg",
    link: "https://i.postimg.cc/TwX4Dhzy/glamora-jewel.png",
    color: "#6bd6fa",
    githubLink: "#",
    liveLink: "https://dt-glamora.myshopify.com/",
  },
   {
    title: "Primposh - Beauty & Cosmetic Shopify Theme",
    subtitle:"Shopify store - 2.0",
    description:(
    <ul className="list-disc pl-5 space-y-1">
      <li>Primposh is suits perfectly for Online stores selling cosmetics, beauty, makeup, beauty spa cosmetics eCommerce theme build with <span className="text-white font-bold-300"> HTML5, CSS3, Js,Liqud lang with responsive.</span></li>
      <li>It achieving <span className="text-white font-bold-300">100+ sales</span> with custom sections and flexible settings 💻✨.</li>
      
    </ul>
    ),
    src: "primposh.png",
    link: "https://i.postimg.cc/zX01MdcQ/primposh.png",
    color: "#55ed90",
    githubLink: "#",
    liveLink: "https://primposh-theme.myshopify.com/",
  },
  {
    title: "Alagi - Horizon shopify updated version -2025",
    description:
    (
    <ul className="list-disc pl-5 space-y-1">
      <li>Alagi - (password:buddha) is a fully responsive cosmetics Shopify theme built independently with <span className="text-white font-bold-300">HTML, CSS, Bootstrap, JavaScript, and Liquid</span>. </li>
      <li>Developed on <span className="text-white font-bold-300">AI-integrated , customizable sections, blocks, and speed-optimized performance</span> for a modern shopping experience. 💻✨</li>
    </ul>
    ),
      
    subtitle:"Shopify store - 2.0",
    src: "alagi.jpg",
    link: "https://i.postimg.cc/7hqZ155J/alagi.png",
    color: "#8ff7bc",
    githubLink: "#",
    liveLink: "https://wdt-alagi.myshopify.com/",
  },
   {
    title: "🚀 A sleek portfolio built with React and Tailwind CSS ",
    subtitle:"Shopify store - 2.0",
    description:(
      <p>A sleek portfolio built with <span className="text-white font-bold-300">HTML5, CSS3, Reactjs and Tailwind CSS </span> to showcase our skills, projects, and experience in a modern design 💻✨.</p>
      ),  
      src: "react.jpg",
    link: "https://i.postimg.cc/QM5tj7fP/react-tailwindcss.png",
    color: "#8f89ff",
    githubLink: "#",
    liveLink: "#",
  },
   {
    title: "Kushi - Multipurpose Shopify Theme 2.0",
    subtitle:"Shopify store - 2.0",
    description:(
    <ul className="list-disc pl-5 space-y-1">
      <li>Kushi is a multipurpose Shopify theme built with <span className="text-white font-bold-300">HTML, CSS, JavaScript, and Liquid</span>, achieved through seamless team collaboration. </li>
      <li>It includes 10 stylish demo layouts, making it perfect dynamic sections and blocks. 💻✨</li>
    </ul>
    ),
    
    src: "kushi.jpg",
    link: "https://i.postimg.cc/TYDTyj7N/kushi.png",
    color: "#fff",
    githubLink: "#",
    liveLink: "https://wdt-aahca.myshopify.com/",
  },
  {
    title: "Skinbliss - Beauty Store",
    subtitle:"Shopify store - 2.0",
    description:
    (
    <ul className="list-disc pl-5 space-y-1">
      <li>SkinBliss is a premium cosmetic theme built with <span className="text-white font-bold-300">HTML, CSS, JavaScript, and Liquid</span>. </li>
      <li>It features elegant animations and dynamic custom section blocks for a modern, customizable user experience 💻✨.</li>
    </ul>
    ),
      
    src: "skinbliss.jpg",
    link: "https://i.postimg.cc/ZRVcZdzJ/skinbliss.png",
    color: "#8f89ff",
    githubLink: "#",
    liveLink:"https://skinbliss-theme.myshopify.com/",
  },
  {
    title: "Swarna - Jewellery Store",
    description:
      (
    <ul className="list-disc pl-5 space-y-1">
      <li>Swarna is a stunning Shopify theme for jewellery and fashion businesses, built independently using <span className="text-white font-bold-300">HTML5, CSS3, JavaScript, Bootstrap5, and Liquid.</span></li>
      <li>It features fully responsive design, dynamic section blocks, and optimized speed for a smooth shopping experience. 💻✨</li>
    </ul>
    ),
      
    subtitle:"Shopify store - 2.0",
      src: "swarna.jpg",
    link: "https://i.postimg.cc/HLMRp36d/swarna.png",
    color: "#ed649e",
    githubLink: "#",
    liveLink:"https://swarna-theme.myshopify.com/",
  },
{
    title: "🚀 Evoluxia - AI Store 2.0",
    description:(
     <ul className="list-disc pl-5 space-y-1">
      <li>🚀 Evoluxia – AI Store Shopify 2.0 Theme features stunning gradient color palettes and mass animations, delivering a visually rich experience.</li>
      <li>It's an exceptionally optimized theme and<span className="text-white font-bold-300"> built with HTML5, CSS3, Js,Liquid  </span> with custom sections and flexible settings 💻✨.</li>
      </ul>
      ), 
    subtitle:"Shopify store - 2.0",
      src: "Evoluxia.jpg",
    link: "https://i.postimg.cc/KzKf5Ygf/evoluxia.png",
    color: "#ed649e",
    githubLink: "#",
    liveLink: "https://evoluxia-theme.myshopify.com/",
  },
  {
    title: "🚀 Ai-kit - Course Store",
    subtitle:"Shopify store - 2.0",
    description:(
  <ul className="list-disc pl-5 space-y-1">
      <li>🚀 AIKIT is a sleek, course-focused Shopify theme designed with <span className="text-white font-bold-300">HTML, CSS, JavaScript, and Liquid </span>.</li>
      <li>It features elegant animations, fully responsive layouts, and customizable section blocks—perfect for modern online learning platforms 💻✨.</li>
    </ul>
    ),
    src: "aikit.jpg",
    link: "https://i.postimg.cc/m2d0VPcf/ai-kit.png",
    color: "#f7ed8f",
    githubLink: "#",
    liveLink:"https://wdt-ai-kit.myshopify.com/",
  },
 
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                subtilte={project.subtitle}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  subtitle,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm font-regular mb-2">{subtitle}</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle:PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
