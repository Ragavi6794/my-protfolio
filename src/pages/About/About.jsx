import HeroImg from "@/assets/images/hero.jpg";
import Shopifylogo from "@/assets/images/shopify-logo.png";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
  Hello! I'm <i className="font-bold">Ragavi M</i>, a passionate <span className="font-bold text-teal-300">Shopify Developer</span> with
  <span className="font-bold"> 2.3 years of experience </span>in Shopify theme development and <br/>    
  <span className="font-bold"> 1 year of experience </span>working with React.js and Recently, I've expanded into Reactjs and Tailwind CSS, where I love building clean and responsive UIs. 
  <br /><br />
  I specialize in building custom, responsive, and performance-optimized Shopify themes using 
  <i className="font-bold text-white"> HTML5, CSS3, Tailwind CSS, Bootstrap 5, JavaScript, Liquid, and ReactJS</i>. 
  My focus is on delivering SEO-friendly, clean, and modern UI experiences that align with both user expectations and business goals.
</p>
               {/* <p className="text-white">
                 I developed multiple	premium themes based on Converted Figma/PSD designs into pixel-perfect, 
                 responsive Shopify themes. I’ve also handled <i className="font-bold text-white"> 
                  third-party app integrations, custom metafields, checkout customizations, and payment gateway </i>
									setups delivering complete end-to-end solutions for e-commerce businesses.{" "}
              </p> */}

              <p className="text-white">
                Along with my full-time role, I also take up <i className="text-white font-bold">freelance</i> Shopify projects where I help clients build, 
                customize, and launch their e-commerce websites. Whether it’s a small customization or a complete 
                theme development, I focus on delivering clean, scalable, and efficient solutions.
              </p>

              <p>
                I'm currently building a Shopify theme with <i className="text-white font-bold">Horizon framework and AI integration</i> for smarter, user-focused <br/> E-Commerce.
              </p>

              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
               <span className="font-bold text-teal-300"> Headless Shopify (Hydrogen)</span> to build modern,
                fast, and scalable storefronts and create seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner ,dedicated and innovator, driven by a desire to
                    contribute to the develope a E-commerce Business grow through custom Shopify development using 
                    the latest Horizon framework, AI-powered features, intuitive UI design and Headless E-Commerce.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ragavi Muthu, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={Shopifylogo}
                        alt="shopify"
                        height="20"
                        width="auto"
                      />
                      <i className="text-white">Shopify Developer</i>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
