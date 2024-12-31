import { MdOutlineArrowOutward } from "react-icons/md"
import { ProCard } from "./ProCard"
import { useNavigate } from "react-router-dom"

export const Projects = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <ProCard
                projectTitle="Nixarcade"
                description="Developing a platform where you can play games wih your friends and family using secure game codes, and contribute through Solana."
                link="https://nixarcade.fun/"
                skills={[
                    { name: "Solana-web3.js" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Web-Socket" },
                    { name: "Express" }
                ]}
            />
            <ProCard
                projectTitle="Joblinker"
                description="Created a job search platform that parses resumes with Gemini, fetches relevant job listings from Google Search, and displays them in a user-friendly frontend."
                link="https://jobs.nixblack.site/"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Gemini" }
                ]}
            />
            <ProCard
                projectTitle="Stratus"
                description="Developed Stratus, a Golang command-line monitoring tool for tracking website performance and security issues, with configurable setup via files and automated email notifications for alerts."
                link="https://stratus.nixblack.site/"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Tailwind" }
                ]}
            />
            <ProCard
                projectTitle="Chain Poll"
                description="Developed a decentralized polling app with Rust smart contracts on Solana, featuring secure, tamper-proof polls and easy sharing via links."
                link="https://github.com/NIXBLACK11/The-Feedback-Loop"
                skills={[
                    { name: "Rust" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Tailwind/Shadcdn" }
                ]}
            />
            <ProCard
                projectTitle="Nix-Faucet"
                description="Built a simple faucet to transfer Solana on the devnet to users' accounts, focusing on a monochrome-themed UI for the website."
                link="https://faucet.nixblack.site/"
                skills={[
                    { name: "Solana-web3.js" },
                    { name: "Typescript" },
                    { name: "React" },
                    { name: "Tailwind" }
                ]}
            />
            <div 
                className="secondary-color font-custom hover:text-white underline text-1xl mt-8 inline-flex items-center"
                onClick={() => {
                    navigate('/projects');
                }}
            >
                View all my projects<MdOutlineArrowOutward />
            </div>
        </div>
    )
}