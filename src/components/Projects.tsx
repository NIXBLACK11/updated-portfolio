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
                link="https://nixjoblinker.vercel.app/"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Gemini" }
                ]}
            />
            <ProCard
                projectTitle="Go Link Tree"
                description="Built a personalized Linktree for storing social media links, featuring secure JWT login with optimized performance, deployed on Vercel and powered by a Golang backend on Render."
                link="https://link-go-tree.vercel.app/"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Tailwind" }
                ]}
            />
            <ProCard
                projectTitle="The Feedback Loop"
                description="Developed a video analysis tool that provides personalized feedback to content creators, comparing their videos with top creators' work."
                link="https://github.com/NIXBLACK11/The-Feedback-Loop"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Gemini" }
                ]}
            />
            <ProCard
                projectTitle="Chrome Extension using BERT"
                description="Utilized Google BERT for real-time text summarization of your current page, easily available as a chrome extension."
                link="https://github.com/NIXBLACK11/summarizationExtension"
                skills={[
                    { name: "Python" },
                    { name: "Google BERT" },
                    { name: "HTML/CSS" },
                    { name: "Chrome Extensions" }
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