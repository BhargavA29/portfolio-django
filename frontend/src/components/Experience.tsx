"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

interface Experience {
    id: number;
    company: string;
    position: string;
    description: string;
    tech_stack: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
}

const Experience = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experiences/`);
                const data = await response.json();
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) {
        return <div className="text-white text-center py-20">Loading...</div>;
    }

    return (
        <div className="w-full bg-gradient-to-b from-black to-[#381a5f] py-20" id="experience">
            <div className="text-center mb-20">
                <h1 className='text-white text-6xl font-semibold inline-block'>
                    Work <span className='text-orange-400'>Experience</span>
                </h1>
            </div>

            <div className='max-w-[1200px] mx-auto px-8 space-y-8'>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className='w-full relative bg-[#2a1347]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden'
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-orange-400/20 via-purple-700/20 to-orange-800/20 animate-gradient-xy'></div>
                        <div className='relative p-8'>
                            <h2 className='text-3xl font-bold text-white/90 mb-2'>{exp.company}</h2>
                            <h3 className='text-xl font-semibold text-orange-400 mb-2'>{exp.position}</h3>
                            <p className='text-white/70 mb-4'>
                                {exp.is_current
                                    ? `${new Date(exp.start_date).toLocaleDateString()} - Present`
                                    : `${new Date(exp.start_date).toLocaleDateString()} - ${exp.end_date ? new Date(exp.end_date).toLocaleDateString() : ''}`
                                }
                            </p>
                            <p className='text-white/70 mb-6 leading-relaxed'>{exp.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {exp.tech_stack.split(',').map((tech, i) => (
                                    <span
                                        key={i}
                                        className='px-4 py-1.5 bg-[#1f0d35] rounded-full text-sm text-white/80 
                                                 hover:bg-[#2a1347] transition-colors duration-300'
                                    >
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience