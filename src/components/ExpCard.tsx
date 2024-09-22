import React from 'react';
import TiltWrapper from './TiltWrapper';

interface Skill {
  name: string;
}

interface JobExperienceCardProps {
  dateRange: string;
  jobTitle: string;
  company: string;
  description: string;
  link: string;
  skills: Skill[];
}

export const ExpCard: React.FC<JobExperienceCardProps> = ({
  dateRange,
  jobTitle,
  company,
  description,
  link,
  skills
}) => {
  return (
    <TiltWrapper options={{ max: 5, speed: 10 }} className='mt-10 rounded-lg'>
      <a href={link} target='_blank' className="rounded-lg">
        <div className="flex justify-between items-start mb-2">
          <span className="secondary-color custom-font text-sm">{dateRange}</span>
        </div>
        <h3 className="font-color text-xl font-custom mb-1">{jobTitle}</h3>
        <h4 className="text-[#16F096] text-lg mb-3">{company}</h4>
        <p className="secondary-color mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
            <span 
                key={index} 
                className={`px-3 py-1 rounded-full font-color text-[#16f095a6]`}
            >
                {skill.name}
            </span>
            ))}
        </div>
      </a>
    </TiltWrapper>
  );
};