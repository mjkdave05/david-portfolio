"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Mobile Development",
    description: "",
    href:""
  },
  {
    num: "02",
    title: "Web Development",
    description: "",
    href:""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="countainer mx-auto"> 
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
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {services.num}
                  </div>
                  <Link href= {services.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>

                {/** title */}
                <h2>{services.title}</h2>
                
                {/** description */}
                <p>{services.description}</p>

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