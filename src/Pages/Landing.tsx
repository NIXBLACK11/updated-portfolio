import { About } from "../components/About"
import { ScrollSection } from "../components/Scroll"
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen;
};

export const Landing = () => {
    const isLargeScreen = useScreenSize();

    return (
        (isLargeScreen) ? 
        <div className="flex h-screen bg-[#000000]">
            <div className="w-[35%] max-h-screen min-h-screen overflow-hidden">
                <About />
            </div>
            <div className="w-[65%] h-full overflow-y-auto">
                <ScrollSection />
            </div>
            {/* <SkillsSlider /> */}
        </div> : 
        <div className="flex h-screen flex-col bg-[#000000]">
            <div className="bg-[#000000]">
                <About />
            </div>
            <div className="bg-[#000000]">
                <ScrollSection />
            </div>
            {/* <SkillsSlider /> */}
        </div>
    )
}