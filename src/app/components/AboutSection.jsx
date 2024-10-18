"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter</li>
        <li>Android Jetpack</li>
        <li>Firebase</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>DPS Numaligarh</li>
        <li>Shiv Jyoti International School</li>
        <li>KIIT University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><Link
              rel="noopener noreferrer" target="_blank" 
              href = "https://coursera.org/share/69153f2c3f211ed5a49d486827b98c10">
              Prompt Engineering for ChatGPT 
              </Link> </li>
        <li><Link
              rel="noopener noreferrer" target="_blank" 
              href = "https://coursera.org/share/0d851da59ba5457edbf02a330c2617e4">
              Data Analysis with Python
              </Link> </li>
        <li><Link
              rel="noopener noreferrer" target="_blank" 
              href = "https://coursera.org/share/259301ae129b845e0ea6abd88562019c">
              Generative AI: Prompt Engineering Basics
              </Link> </li>
        
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I am a full stack app and web developer. I enjoy creating seamless, user-friendly experiences. I have experience working with Flutter, Javascript, React, next.js and python among others. I am generally excited to work with others to create well rounded applications.
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
