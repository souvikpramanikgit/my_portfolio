import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiGithub, 
  SiNodedotjs, 
  SiSpringboot, 
  SiCplusplus, 
  SiMysql
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: React.ElementType;
}

const topRowSkills: SkillItem[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];

const bottomRowSkills: SkillItem[] = [
  { name: "SQL", icon: SiMysql },
  { name: "GitHub", icon: SiGithub },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "SpringBoot", icon: SiSpringboot },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava },
];

const SkillsList = ({ skills }: { skills: SkillItem[] }) => {
  return (
    <ul className="flex items-center">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <li
            key={index}
            className="mx-2 flex items-center gap-2 rounded-lg px-3 py-2 bg-[#1A1A1A] border border-neutral-700 hover:border-[#00FFFF] transition-colors duration-300"
          >
            <Icon className="text-2xl text-white/80 group-hover:text-blue-400" />
            <span className="text-white/70 whitespace-nowrap">{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Skills = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <h1 className='text-2xl font-bold text-white underline underline-offset-8 decoration-[#00FFFF] decoration-wavy'>Skills</h1>
      
      {/* Mobile version with Marquee (hidden on large screens) */}
      <div className="w-full space-y-6 lg:hidden">
        <Marquee 
          autoFill 
          pauseOnHover 
          speed={20}
        >
          <SkillsList skills={topRowSkills} />
        </Marquee>

        <Marquee 
          autoFill 
          pauseOnHover 
          direction="right" 
          speed={20}
        >
          <SkillsList skills={bottomRowSkills} />
        </Marquee>
      </div>

      {/* Desktop Version (hidden on small screens) */}
      <div className="hidden lg:flex lg:flex-col gap-6 w-full">
        {/* Static layout for laptop/desktop - top row */}
        <div className="flex flex-wrap justify-end gap-2">
          {topRowSkills.map((skill, index) => (
            <div 
              key={`desktop-top-${index}`} 
              className="flex items-center gap-2 rounded-lg px-3 py-2 bg-[#1A1A1A] border border-neutral-700 hover:border-[#00FFFF] transition-colors duration-300"
            >
              <span className="text-2xl text-white/80 group-hover:text-blue-400">
                <skill.icon />
              </span>
              <p className="text-white/70 group-hover:text-white">{skill.name}</p>
            </div>
          ))}
        </div>
        
        {/* Static layout for laptop/desktop - bottom row */}
        <div className="flex flex-wrap justify-start gap-2">
          {bottomRowSkills.map((skill, index) => (
            <div 
              key={`desktop-bottom-${index}`} 
              className="flex items-center gap-2 rounded-lg px-3 py-2 bg-[#1A1A1A] border border-neutral-700 hover:border-[#00FFFF] transition-colors duration-300"
            >
              <span className="text-2xl text-white/80 group-hover:text-blue-400">
                <skill.icon />
              </span>
              <p className="text-white/70 group-hover:text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;