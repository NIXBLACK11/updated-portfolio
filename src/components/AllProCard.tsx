import React from 'react';

interface AllProcCardProps {
  projectTitle: string;
  description: string[];
  link: string;
  projPhoto: string;
  skills: string[];
}

export const AllProCard: React.FC<AllProcCardProps> = ({
  projectTitle, description, link, projPhoto, skills 
}) => {
  return (
    <a href={link} target='_blank' >
      <div className="mt-10 bg-transparent hover:bg-[#16f09510] p-6 font-custom">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <img
              src={projPhoto}
              width={300}
              className='p-0 m-0'
            />
          </div>
          <div className="col-span-2 font-custom text-[#16F096]">{projectTitle}</div>
          <div className="col-span-4">
            {description.map((desc, index) => (
              <div key={index} className='font-custom secondary-color'>
                {desc}
              </div>
            ))}
          </div>
          <div className="col-span-3">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-[#16f095a6] rounded-full px-2 py-1 text-xs mr-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
