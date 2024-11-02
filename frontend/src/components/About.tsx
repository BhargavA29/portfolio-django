"use client"
import React from 'react'
import Image from 'next/image'
import education from "../assets/education.png"
import problem_solving from "../assets/problem-solving.png"
import experience from "../assets/experience.png"
import technical_skills from "../assets/technical-skills.png"


const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto' id='about'>

            <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-400'>Me</span></h1>



            <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

                <div className=' w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6 '>
                        <Image src={education} alt='education' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4 '>
                            <h2 className='text-2xl font-bold text-white/80 pl-2'>Education</h2>
                            <p className='text-lg text-white/70 mt-2 pl-2'>I hold a Bachelor&apos;s Degree in I.T Engineering from Xavier Institute of Engineering, Mumbai with a CGPA of 8 and I am focusing on Technologies like <strong>React, Next.js and Tailwind CSS</strong>.</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6 '>
                        <Image src={problem_solving} alt='problem_solving' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4 '>
                            <h2 className='text-2xl font-bold text-white/80 pl-2 '>Problem Solving</h2>
                            <p className='text-lg text-white/70 mt-2 pl-2'>I approach challenges with a logical and systematic mindset.</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6 '>
                        <Image src={experience} alt='experience' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4 '>
                            <h2 className='text-2xl font-bold text-white/80 pl-2 '>Experience</h2>
                            <p className='text-lg text-white/70 mt-2 pl-2'>I have a diverse portfolio of personal projects.</p>
                        </div>
                    </div>
                </div>

                <div className=' w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6 '>
                        <Image src={technical_skills} alt='technical_skills' className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4 '>
                            <h2 className='text-2xl font-bold text-white/80 pl-2 '>Technical Skills</h2>
                            <p className='text-lg text-white/70 mt-2 pl-2'>As a Full-Stack <strong>MERN</strong> Developer, I specialize in MongoDB, Express, React and Node along with Next.js and Tailwind CSS. </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About