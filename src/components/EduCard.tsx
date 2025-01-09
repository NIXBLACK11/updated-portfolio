import React from 'react';
import TiltWrapper from './TiltWrapper';

interface EduCardProps {
  dateRange: string;
  course: string;
  inst: string;
  link: string;
}

export const EduCard: React.FC<EduCardProps> = ({
  dateRange,
  course,
  inst,
  link,
}) => {
  return (
    <TiltWrapper options={{ max: 5, speed: 10 }} className='mt-10 rounded-lg w-full'>
      <a href={link} target='_blank' className="font-custom rounded-lg block w-full">
        <div className="flex flex-col items-start w-full">
          <span className="secondary-color custom-font text-sm mb-2">{dateRange}</span>
          <h3 className="font-color text-xl font-custom mb-1">{course}</h3>
          <h4 className="text-[#16F096] text-lg mb-3">{inst}</h4>
        </div>
      </a>
    </TiltWrapper>
  );
};