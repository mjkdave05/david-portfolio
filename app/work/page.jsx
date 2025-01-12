"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Mobile Development",
    title: "project 1",
    description: "A sleek and user-friendly eCommerce app built with Flutter and Riverpod, featuring smooth navigation, dynamic product listings. Showcasing expertise in creating responsive and efficient mobile solutions.",
    stack: [{ name: "Dart"}, {name: "Flutter"}, {name: "Riverpod"}],
    image: "/assets/work/e-commerce.png",
    // live: "",
    github: "https://github.com/mjkdave05/ecommerce_app.git",
  },
  {
    num: "02",
    category: "Mobile Development",
    title: "project 2",
    description: "Contributed to a robust video conferencing app built with Flutter and Firebase, enabling seamless virtual meetings with features like real-time video, chat, and user-friendly interfaces. Demonstrates expertise in building reliable and engaging communication solutions.",
    stack: [{ name: "Dart"}, {name: "Flutter"}, {name: "Firebase"}],
    image: "/assets/work/conferencing_app.png",
    // live: "",
    github: "https://github.com/mjkdave05/video_confrence_app.git",
  },
  {
    num: "03",
    category: "Mobile Development",
    title: "project 3",
    description: "Contributed to a powerful real-time collaboration tool built with Flutter and Firebase, featuring user authentication, real-time document editing, task management, project timeline and gant charts, notifications, instant updates, and seamless teamwork. Highlights expertise in creating efficient and interactive productivity solutions.",
    stack: [{ name: "Dart"}, {name: "Flutter"}, {name: "Firebase"}],
    image: "/assets/work/collaboration_tool.png",
    // live: "",
    github: "https://github.com/unawarexi/Flutter_Realtime_Workspace.git",
  },
  {
    num: "04",
    category: "Mobile Development",
    title: "project 4",
    description: "A modern real estate app built with Flutter, designed for seamless property browsing, and smooth user interactions. Showcasing expertise in creating intuitive and scalable mobile solutions",
    stack: [{ name: "Dart"}, {name: "Flutter"}],
    image: "/assets/work/realestate.png",
    // live: "",
    github: "https://github.com/mjkdave05/Real-Estate-App.git",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description: "",
    stack: [{ name: "Html 5"}, {name: "Css 3"}],
    image: "/",
    // live: "",
    github: "",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">

              {/**outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/** project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/** project description */}
              <p className="text-white/60">{project.description}</p>
              {/** stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/** remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/** border */}
              <div className="border border-white/20"></div>

              {/** buttons */}
              <div className="flex items-center gap-4">

               {/** live project button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                        justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}

                {/** github project button */}
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                        justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) =>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative rounded-2xl flex justify-center items-center bg-white/5" style={{ height: "600px" }}>
                      {/** overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/** image */}
                      <div className="relative w-full h-full min-w[500px] min-h-[600px] max-w-[250px] max-h-[650px]">
                        <Image
                          src={project.image}
                          layout="responsive"
                          width={400} 
                          height={500}
                          className="object-contain rounded-lg"
                          alt="Project Image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>


                  );
                })}
              {/* slider buttons*/}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 
                z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
                flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work