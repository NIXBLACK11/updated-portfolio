import { useEffect, useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';
import { FaGithub, FaLinux, FaPython, FaReact, FaRust } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiMongodb } from 'react-icons/si';


export const SkillsSlider = () => {
  const skills = [
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "Python", icon: FaPython },
    { name: "React", icon: FaReact },
    { name: "Git", icon: FaGithub },
    { name: "Golang", icon: FaGolang },
    { name: "Rust", icon: FaRust },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Linux", icon: FaLinux },
    { name: "PostgreSQL", icon: DiPostgresql }
  ];

  const doubledSkills = [...skills, ...skills];
  
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        if (prev <= -50 * skills.length) {
          return 0;
        }
        return prev - 0.5;
      });
    };

    const intervalId = setInterval(animate, 20);
    return () => clearInterval(intervalId);
  }, [skills.length]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#000000] h-8 overflow-hidden">
      <div 
        className="flex items-center h-full whitespace-nowrap"
        style={{ transform: `translateX(${position}px)` }}
      >
        {doubledSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex items-center px-8 text-white font-medium"
            >
              {skill.name}
              <Icon className="ml-2 w-4 h-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSlider;