import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"

export const About = () => {
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
                    <img src="go.png" style={{width: 30, height: 30}} className="m-4"/>
                    <img src="ts.png" style={{width: 30, height: 30}} className="m-4"/>
                    <img src="linux.png" style={{width: 30, height: 30}} className="m-4"/>
                    <img src="python.png" style={{width: 30, height: 30}} className="m-4"/>
                    <img src="sol.png" style={{width: 30, height: 30}} className="m-4"/>
                </div>
                <div className="bg-transparent h-24"></div>
                <div className="font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6]">About</div>
                <div className="font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6]">Experience</div>
                <div className="font-custom secondary-color text-2xl mt-4 hover:text-[#16f095a6]">Projects</div>
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