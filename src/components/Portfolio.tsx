"use client";
import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Full-Stack Expense Tracker",
        desc: "A Full Stack Expense Tracker to Manage all your Expenses.",
        devStack: "React, Tailwind Css, Drizzle ORM, Clerk",
        link: "https://fullstack-expense-tracker-ten.vercel.app/",
        git: "https://github.com/BhargavA29/fullstack-expense-tracker",
        src: project1,
    },
    {
        title: "Full-Stack Spotify Clone",
        desc: "A Full Stack Spotify Clone based on MERN Stack.",
        devStack: "MongoDB, Express, React, Node, Cloudinary",
        link: "https://spotify-frontend-beryl.vercel.app/",
        git: "https://github.com/BhargavA29/Spotify-Clone",
        src: project2,
    },
    {
        title: "Netflix Clone",
        desc: "A Netflix Clone Website providing an identical UI Experience.",
        devStack: "React, react-query, Tailwind CSS, Firebase Authentication",
        link: "https://streaming-platform-clone-zeta.vercel.app/login",
        git: "https://github.com/BhargavA29/Netflix-clone",
        src: project3,
    },
    {
        title: "QuickCart - Groceries",
        desc: "A Grocery Shopping Website to order with variety of products available.",
        devStack: "React, CSS and Auth using JWT, Razorpay API",
        link: "https://quickcart-ecommerce.netlify.app/",
        git: "https://github.com/BhargavA29/grocery-website",
        src: project4,
    },
    {
        title: "Modular Login System",
        desc: "A Modular login system with JWT authentication and MongoDB integration.",
        devStack: "Node.js, Express.js, Mongoose, JWT",
        link: "https://loginsystemui.netlify.app/",
        git: "https://github.com/BhargavA29/Modular-Login-System-withUI",
        src: project5,
    },
];

const Portfolio = () => {
    return (
        <div
            className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 min-h-screen"
            id="portfolio"
        >
            <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12 ">
                Personal <span className="text-orange-400">Projects</span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1
                                ? " md:flex-row-reverse gap-12 items-start"
                                : " md:flex-row gap-12 items-start"
                            }`}
                    >
                        <div className="flex-1 space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1
                                }`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <h2 className="text-lg text-white/70 break-words p-4">
                                {project.desc}
                            </h2>
                            <h2 className="text-xl text-orange-400 font-semibold">
                                {project.devStack}
                            </h2>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">
                                    Demo
                                </a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center">
                            <Image
                                src={project.src}
                                alt={project.title}
                                width={500}
                                height={350}
                                className="object-cover border rounded border-gray-700"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
