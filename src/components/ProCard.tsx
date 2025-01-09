import React from 'react';
import TiltWrapper from './TiltWrapper';

interface Skill {
  name: string;
}

interface ProjectCardProps {
  projectTitle: string;
  description: string;
  link: string;
  skills: Skill[];
}

export const ProCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  description,
  link,
  skills
}) => {
  return (
    <TiltWrapper options={{ max: 5, speed: 10 }} className='mt-10 rounded-lg w-full'>
      <a href={link} target='_blank' className="flex flex-col font-custom">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[#16F096] text-xl font-custom mb-1">{projectTitle}</h3>
        </div>
        <p className="secondary-color mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 ">
            {skills.map((skill, index) => (
            <span 
                key={index} 
                className={`px-3 py-1 rounded-full text-[#16f095a6]`}
            >
                {skill.name}
            </span>
            ))}
        </div>
      </a>
    </TiltWrapper>
  );
};