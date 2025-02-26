import { FaGithub, FaLinkedin, FaLinux, FaPython, FaRust } from "react-icons/fa"
import { FaGolang, FaUpwork, FaXTwitter } from "react-icons/fa6"
import { SiLeetcode, SiTypescript } from "react-icons/si"
import { useRecoilState } from "recoil";
import { sectionState } from "../atom";
import { useEffect } from "react";
import { GoVersions } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

export const About = () => {
    const [activeSection, setActiveSection] = useRecoilState(sectionState);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.6
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, options);
    
        sections.forEach((section) => observer.observe(section));
    
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);
    return (
        <div className="mx-8 flex justify-center items-center flex-col mt-20 mb-auto">
            <div>
                <div className="font-custom text-[#16F096] text-5xl">Siddharth Singh Rana</div>
                <div className="font-custom font-color text-2xl mt-2">Software Developer</div>
                <div className="font-custom secondary-color text-1xl mt-2">
                    <a href="https://fellowship.mlh.io/" target="_blank" className="underline hover:text-[#16f095a6]">MLH Fellow '23</a>&nbsp;|&nbsp;
                    <a href="https://superteam.fun/" target="_blank" className="underline hover:text-[#16f095a6]">@SuperteamIN</a><br/>
                    <a href="https://nixarcade.fun/" target="_blank" className="underline hover:text-[#16f095a6]">Building Nixarcade</a><br/>
                    Experience in building apps with Typescript, Golang and Python.
                </div>
                <div className="flex flex-row justify-center mt-12">
                    <FaGolang className="text-[#16F096] m-4 text-3xl"/>
                    <SiTypescript className="text-[#16F096] m-4 text-3xl"/>
                    <FaLinux className="text-[#16F096] m-4 text-3xl"/>
                    <FaPython className="text-[#16F096] m-4 text-3xl"/>
                    <FaRust className="text-[#16F096] m-4 text-3xl"/>
                </div>
                <div className="bg-transparent h-20 mt-12 flex flex-col items-center">
                    <div 
                        className="rounded-full bg-[#16F096] hover:bg-[#16f095a6] px-10 py-2 my-0 w-min font-custom font-color text-center"
                        onClick={()=> {
                            window.open('https://drive.google.com/file/d/16gkJV8RyU-fYvo2V5HPsmXWec0sNT0XI/view?usp=sharing', '_blank');
                        }}
                    >
                        Resume
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div 
                        className="secondary-color font-custom hover:text-white underline text-1xl mb-12 inline-flex items-center"
                        onClick={() => {
                            window.open("https://calendly.com/nixblack/30min", "_blank");
                        }}
                        >
                        Book a quick call with me<MdOutlineArrowOutward />
                    </div>
                </div>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'About' ? 'text-[#16f095]' : ''
                    }`}
                    href="#About"
                >
                    About
                </a><br/>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'Experience' ? 'text-[#16f095]' : ''
                    }`}
                    href="#Experience"
                >
                    Experience
                </a><br/>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'Projects' ? 'text-[#16f095]' : ''
                    }`}
                    href="#Projects"
                >
                    Projects
                </a><br/>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'Publicationss' ? 'text-[#16f095]' : ''
                    }`}
                    href="#Publications"
                >
                    Publicationss
                </a><br/>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'Education' ? 'text-[#16f095]' : ''
                    }`}
                    href="#Education"
                >
                    Education
                </a><br/>
                <a
                    className={`font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6] ${
                    activeSection === 'Recommendations' ? 'text-[#16f095]' : ''
                    }`}
                    href="#Recommendations"
                >
                    Recommendations
                </a><br/>
                {/* <div className="bg-transparent h-32"></div> */}
                <div className="flex flex-row justify-center mt-10">
                    <a href="https://github.com/NIXBLACK11/" target="_blank" className="secondary-color m-4 text-3xl hover:text-[#16f095a6]">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/siddharthsinghrana11/" target="_blank"  className="secondary-color m-4 text-3xl hover:text-[#16f095a6]">
                        <FaLinkedin/>
                    </a>
                    <a href="https://x.com/NIXBLACK_" target="_blank"  className="secondary-color m-4 text-3xl hover:text-[#16f095a6]">
                        <FaXTwitter/>
                    </a>
                    <a href="https://leetcode.com/NIXBLACK/" target="_blank"  className="secondary-color m-4 text-3xl hover:text-[#16f095a6]">
                        <SiLeetcode/>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0169b807dadb540840" target="_blank"  className="secondary-color m-4 text-3xl hover:text-[#16f095a6]">
                        <FaUpwork />
                    </a>
                    <a href="https://siddharth-dev-portfolio.netlify.app/" target="_blank"  className="secondary-color m-4 text-3xl hover:text-[#16f095a6] inline-flex items-center">
                        <GoVersions/>1
                    </a>
                </div>
            </div>
        </div>
    )
}