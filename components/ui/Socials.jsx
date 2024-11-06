import { Link } from "lucide-react";
import Links from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "/"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/david-majekodunmi-b855a81a5/"},
    {icon: <FaInstagram />, path: ""},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((items, index) => {
        return (
            <Link key={index} href={items.path} className={iconStyles}>
                {items.icon}
            </Link>
        );
    })}
    </div>
  )
}

export default Socials