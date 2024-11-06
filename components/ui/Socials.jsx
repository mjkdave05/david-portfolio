
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/mjkdave05"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/david-majekodunmi-b855a81a5/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/mjk_dave"},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((items, index) => {
        return (
            <Link key={index} target="_blank" href={items.path} className={iconStyles}>
                {items.icon}
            </Link>
        );
    })}
    </div>
  )
}

export default Socials