import { FaGithub, FaLinkedin, FaLinux, FaPython } from "react-icons/fa"
import { FaGolang, FaXTwitter } from "react-icons/fa6"
import { SiLeetcode, SiSolidity, SiTypescript } from "react-icons/si"
import { useRecoilState } from "recoil";
import { sectionState } from "../atom";
import { useEffect } from "react";

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
        <div className="mx-8 flex justify-center items-center flex-col mt-20">
            <div>
                <div className="font-custom text-[#16F096] text-5xl">Siddharth Singh Rana</div>
                <div className="font-custom font-color text-2xl mt-2">Software Developer</div>
                <div className="font-custom secondary-color text-1xl mt-2">
                    <a href="https://fellowship.mlh.io/" target="_blank" className="underline hover:text-[#16f095a6]">MLH Fellow '23</a>&nbsp;|&nbsp;
                    <a href="https://superteam.fun/" target="_blank" className="underline hover:text-[#16f095a6]">@SuperteamIN</a><br/>
                    <a href="https://solabule-nix.vercel.app/" target="_blank" className="underline hover:text-[#16f095a6]">Building Solabule</a><br/>
                    Experience in building apps with Typescript, Golang and Python.
                </div>
                <div className="flex flex-row justify-center mt-12">
                    <FaGolang className="text-[#16F096] m-4 text-3xl"/>
                    <SiTypescript className="text-[#16F096] m-4 text-3xl"/>
                    <FaLinux className="text-[#16F096] m-4 text-3xl"/>
                    <FaPython className="text-[#16F096] m-4 text-3xl"/>
                    <SiSolidity className="text-[#16F096] m-4 text-3xl"/>
                </div>
                <div className="bg-transparent h-24"></div>
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
                <div className="bg-transparent h-32"></div>
                <div className="flex flex-row justify-center mb-0">
                    <a href="https://github.com/NIXBLACK11/" target="_blank">
                        <FaGithub className="secondary-color m-4 text-3xl hover:text-[#16f095a6]"/>
                    </a>
                    <a href="https://www.linkedin.com/in/siddharthsinghrana11/" target="_blank">
                        <FaLinkedin className="secondary-color m-4 text-3xl hover:text-[#16f095a6]"/>
                    </a>
                    <a href="https://x.com/NIXBLACK_" target="_blank">
                        <FaXTwitter className="secondary-color m-4 text-3xl hover:text-[#16f095a6]"/>
                    </a>
                    <a href="https://leetcode.com/NIXBLACK/" target="_blank">
                        <SiLeetcode className="secondary-color m-4 text-3xl hover:text-[#16f095a6]"/>
                    </a>
                </div>
            </div>
        </div>
    )
}