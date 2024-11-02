"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string;
    demo_link: string;
    github_link: string;
    image: string;
    order: number;
}

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/projects/');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div className="text-white text-center py-20">Loading...</div>;
    }

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <div
            className="text-white bg-[linear-gradient(to_bottom,#000,#381a5f_35%,#000_100%)] py-18 mt-52 min-h-screen"
            id="portfolio"
        >
            <div className="text-center">
                <h1 className="text-white text-6xl font-semibold inline-block">
                    Personal <span className="text-orange-400">Projects</span>
                </h1>
            </div>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1
                            ? "md:flex-row-reverse gap-12 items-start"
                            : "md:flex-row gap-12 items-start"
                            }`}
                    >
                        <div className="flex-1 space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <h2 className="text-lg text-white/70 break-words p-4">
                                {project.description}
                            </h2>
                            <h2 className="text-xl text-orange-400 font-semibold">
                                {project.tech_stack}
                            </h2>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.demo_link} className="mr-6" target="_blank" rel="noopener noreferrer">
                                    Demo
                                </a>
                                <a href={project.github_link} target="_blank" rel="noopener noreferrer">Git</a>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={350}
                                className="object-cover border rounded border-gray-700"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {projects.length > 4 && !showAll && (
                <div className="flex flex-col items-center mt-16">
                    <div className="group relative">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                        >
                            <FaAnglesDown size={32} className="animate-bounce" />
                        </button>
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black/80 text-white text-sm py-1 px-2 rounded-md 
                                        text-center whitespace-nowrap">
                                Load More
                            </div>
                            {/* Triangle */}
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 
                                        border-4 border-transparent border-t-black/80"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
