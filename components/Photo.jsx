"use client";

import { easeIn, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
              opacity: 1, 
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
      >
          <motion.div 
              initial={{ opacity: 0 }} 
              animate={{
                  opacity: 1, 
                  transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
              }}
              // Responsive sizing for the image container
              className="w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[460px] xl:h-[460px] mix-blend-lighten absolute flex items-center justify-center"
          >
              <Image 
                  src="/assets/pic.png" 
                  priority 
                  quality={100} 
                  fill 
                  alt=""
                  className="object-contain rounded-full" 
              />
          </motion.div>

          {/* Circle Animation */}
          <motion.svg 
              className="w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[370px] xl:w-[506px] xl:h-[506px]" 
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
          >
              <motion.circle 
                  cx="253" 
                  cy="253"
                  r="250"
                  stroke="#00ffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                      rotate: [120, 360],
                  }}
                  transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                  }}
              />
          </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo;
