import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/ui/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">

          {/** text */}

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Mobile Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> 
              <span className="text-accent">Majekodunmi David</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I'm a Flutter developer passionate about creating sleek, user-friendly mobile apps. 
            With over a year of experience, I love turning ideas into impactful digital solutions.
            </p>

            {/** btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8"> 
              <a 
                href="/assets/work/Majekodunmi David Resume.pdf" 
                download="Majekodunmi David Resume.pdf" 
                className="no-underline"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-10 h-10 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-lg hover:bg-accent 
                    hover:text-primary transition-all duration-500" 
                />
              </div>
            </div>
          </div>

          {/** photo */}

          <div className="order-1 xl:order-none mb-7 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home