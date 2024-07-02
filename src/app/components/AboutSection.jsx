"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>HTML</li>
        <li>MicrosoftSQL</li>
        <li>C/C++</li>
        <li>JavaScript</li>
        <li>React.js</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Harare Institute of Technology (HIT) - Part 1.1 to Part 2.1</li>
        <li>Zambia Centre of Accountancy Studies (ZCAS) - Part 3.1 to present</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Project Management Fundamentals: APM-PFQ, PRINCE2 & AGILEPM</li>
        <li>Fundamentals of Project Management</li> 
        <li>Applied Operations Management- Inventory Models</li>
        <li>Customer Care Skills and Telephone Etiquette</li> 
        <li>Introduction to Supply Chain Management</li> 
        <li>Microsoft Word for Adminstrative Professionals</li> 
        <li>CompTIA A+ 1000 Part 1</li> 
        <li>Microsoft Azure Administrator</li>
        <li>ITIL 4 Fundamentals : Essential of IT Service Management</li>
        <li>ISO 20000 - Principles of IT Service Management Systems (ITSM)</li>    
      </ul>
    ),
  },
  {
  title: "Diplomas",
    id: "diplomas",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in Interconnecting CISCO Networking Devices Part 1 (ICND1) v3 CCNA</li>
        <li>Diploma in Operations Management (Ops)</li>
        <li>Diploma in Project Management</li>
      </ul>
    ),
  },
  {
  title: "CISCO Digital Badges",
    id: "badges",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Data Science</li>
        <li>Introduction to Cybersecurity</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about_img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have studying experience
            working with JavaScript, React, Java, C/C++, C#, HTML, CSS, and MicrosoftSQL. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("diplomas")}
              active={tab === "diplomas"}
            >
              {" "}
              Diplomas{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("badges")}
              active={tab === "badges"}
            >
              {" "}
              CISCO Digital Badges{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;