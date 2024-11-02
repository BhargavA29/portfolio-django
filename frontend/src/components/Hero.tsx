"use client"
import Image from "next/image"
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import { motion } from "framer-motion"
import profilepic from "../assets/profilepic.png"
import { useTypewriter, Cursor } from "react-simple-typewriter"



const Hero = () => {

    const [text] =  useTypewriter({
        words: ['Bhargav Ayare', 'Full Stack Web Developer', 'I.T Engineer'],
        loop: true,
    });
    

    return(
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

            <div
                className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 z-0"
                style={{ background: "radial-gradient(closest-side, #000 80%, #2B1942)" }}
            ></div>


            <div className="relative">
                <div className=" text-5xl md:text-7xl font-bold text-center ">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">
                        <span>{text}</span>
                        <Cursor/>
                    </h1>
                </div>

                <motion.div
                className="hidden md:block absolute left-[250px] top-[170px]"
                drag
                >
                    <Image
                    src={cursor}
                    height={170}
                    width={170}
                    alt="cursor"
                    className=""
                    draggable="false"
                    />

                </motion.div>

                <motion.div
                className="hidden md:block absolute right-[220px] top-[170px]"
                drag
                >
                    <Image
                    src={lightning}
                    height={120}
                    width={120}
                    alt="cursor"
                    className=""
                    draggable="false"
                    />

                </motion.div>


            <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 ">
                I am a Full-Stack Developer focused on creating websites that provide the best User Experience.
            </p>

            <Image
            src={profilepic}
            alt="profile picture"
            className="h-[500px] w-auto mx-auto"
            />

    </div>

        </div>
    )
}

export default Hero