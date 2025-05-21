"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1747860654/1200px-BirminghamUniversityCrest_jq82k3.webp",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1747861066/ChatGPT_Image_21_mai_2025_21_57_13_d1kvdb.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1747860823/ChatGPT_Image_21_mai_2025_21_53_38_m3l0i2.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1747860991/aston-webb_rplknc.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          I&apos;m Amy Tierney - a second year pure mathematics PhD student at the University of Birmingham, supervised by Professor Jonathan Bennett. My focus is in harmonic analysis, with great interest in weighted oscillatory operator inequalities. In particular, in variants of local Stein and Mizohata-Takeuchi conjectures, which seek to bound oscillatory operators by maximal functions.
        </Paragraph>
        <Paragraph className=" mt-4">
          My undergraduate degree also took place at the University of Birmingham, where my Masters project, titled &apos;Heat-Flow Monotonicity Phenomena in Mathematical Analysis&apos;, was also supervised by Professor Jonathan Bennett. This looked at how the heat-flow method can be used to prove Brascamp-Lieb type inequalities: linear Brascamp-Lieb; subadditivity of the entropy; and adjoint Brascamp-Lieb inequalities.
        </Paragraph>

        <Paragraph className=" mt-4">
          Alongside my PhD, I am a part of the Birmingham Piscopia Committee. At Piscopia, we aim to create a supportive community for women and underrepresented genders researching in mathematics, as well as to encourage more students to pursue a PhD in mathematics or related disciplines. At the University of Birmingham, we strive to achieve these goals through weekly coffee mornings, PhD information events for undergraduates and research showcases such as our event for International Women's Day. Find out more: <motion.a 
            href="https://piscopia.co.uk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative font-medium text-black dark:text-white"
            whileHover="hover"
          >
            <motion.span 
              className="relative z-10"
              variants={{
                hover: {
                  y: -1
                }
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
            >
              The Piscopia Initiative – Creating a community of women and underrepresented genders in mathematics
            </motion.span>
            <motion.span 
              className="absolute bottom-0 left-0 h-[1px] w-full bg-black dark:bg-white origin-left"
              variants={{
                hover: {
                  scaleX: 1
                }
              }}
              initial={{ scaleX: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut" 
              }}
            />
          </motion.a>.
        </Paragraph>
      </div>
    </div>
  );
}
