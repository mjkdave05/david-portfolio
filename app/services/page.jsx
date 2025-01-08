"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Mobile Development",
    description: "Discover the various mobile applications built using Flutter, each of the mobile application was designed with a focus on usability, performance, and seamless interaction.",
    href:"/mobile" 
  },
  {
    num: "02",
    title: "Web Development",
    description: "Discover web projects that demonstrate my commitment to creating responsive, engaging, and highly functional websites using React and Tailwind CSS.",
    href:"/work", 
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="countainer mx-auto px-8 lg:px-12 xl:px-24"> 
        <motion.div 
          initial={{opacity: 0}} 
          animate= {{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group"
              >

                {/** top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline 
                    text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {services.num}
                  </div>
                  <Link href= {services.href} className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/** title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500">
                  {services.title}
                </h2>
                
                {/** description */}
                <p className="text-white/60">
                  {services.description}
                </p>

                {/** border */}
                <div className= "border-b border-white/20 w-full"></div>
              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services