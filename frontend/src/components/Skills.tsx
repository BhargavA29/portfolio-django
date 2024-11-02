import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaDatabase } from 'react-icons/fa';
import NextJsIcon from "../assets/nextjs.webp"
import ExpressIcon from "../assets/expressjs.png"
import Tailwind from "../assets/tailwind.png"
import Image from 'next/image';
import PythonIcon from "../assets/python.png"
import ConvexIcon from "../assets/convex.png"
import CloudinaryIcon from "../assets/cloudinary.png"
import ClerkIcon from "../assets/clerk.png"

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <FaDatabase size={140} />, label: "MongoDB" },
  {
    icon: <Image src={NextJsIcon} alt="Next.js" width={140} height={140} />,
    label: "NextJs"
  },
  {
    icon: <Image src={ExpressIcon} alt="Next.js" width={140} height={140} />,
    label: "ExpressJs"
  },
  {
    icon: <Image src={Tailwind} alt="Next.js" width={140} height={140} />,
    label: "Tailwind CSS"
  },
  {
    icon: <Image src={PythonIcon} alt="Python" width={140} height={140} />,
    label: "Python"
  },
  {
    icon: <Image src={ConvexIcon} alt="Convex" width={140} height={140} />,
    label: "Convex"
  },
  {
    icon: <Image src={CloudinaryIcon} alt="Cloudinary" width={140} height={140} />,
    label: "Cloudinary"
  },
  {
    icon: <Image src={ClerkIcon} alt="Clerk" width={140} height={140} />,
    label: "Clerk"
  }
];

const Skills = () => {
  return (
    <div className='bg-gradient-to-b from-[#381a5f] to-black py-32'>
      <div className='text-white w-[400px] md:min-w-[950px] max-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What I do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className=' h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
            >
              {skill.icon}
              <p className='mt-2'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
