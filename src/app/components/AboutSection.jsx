'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
const TAB_DATA=[
    {
        title:'Skills',
        id:'skills',
        content:(
            <ul className='list-disc pl-2'>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Next JS</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title:'Education',
        id:'education',
        content:(
            <ul className='list-disc pl-2'>
                <li>Bachelors of Technology in Information Technology</li>
            </ul>
        )
    },
    {
        title:'Certifications',
        id:'certifications',
        content:(
            <ul className='list-disc pl-2'>
                <li>Microsoft AZ-900</li>
                <li>AWS CLoud Practitioner</li>
                <li>Appium Mobile Automation for Android and IOS</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab,setTab]=useState('skills');
    const [isPending,startTransition]=useTransition();
    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
     <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
  <Image src='/images/about-image.png' width={500} height={500}/>
  <div className='mt-4 md:mt=0 text-left flex flex-col h-full'>
    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
    <p className='text-base lg:text-lg'>Detail-oriented QA Engineer with comprehensive experience in web, mobile (Android and IOS), and hybrid app automated testing. Proficient in manual testing, API testing, and performance testing with JMeter. Excels in ensuring software quality and reliability. With exposure to front-end development, I am eager to leverage this expertise to contribute to cutting-edge projects while continuing to excel in the field of quality assurance.</p>
  <div className='flex flex-row mt-8'>
    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==='skills'}>{" "}Skills{" "}</TabButton>
    <TabButton selectTab={()=>handleTabChange("education")} active={tab==='education'}>{" "}Education{" "}</TabButton>
    <TabButton selectTab={()=>handleTabChange("certifications")} active={tab==='certifications'}>{" "}Certifications{" "}</TabButton>
  </div>
  <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
  </div>
     </div>
     </section>   
  )
}

export default AboutSection
