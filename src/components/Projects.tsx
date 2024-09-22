import { ProCard } from "./ProCard"

export const Projects = () => {
    return (
        <div>
            <ProCard
                projectTitle="Solabule"
                description="Currently working on Solabule.A place to play all your favourite board games.Powered by Solana."
                link="https://solabule-nix.vercel.app"
                photoLink="./projects/solabule.png"
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
                description="Get the latest links to jobs based on your resume and preferences."
                link="https://nixjoblinker.vercel.app/"
                photoLink="./projects/Joblinker.png"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Gemini" }
                ]}
            />
            <ProCard
                projectTitle="Go Link Tree"
                description="A place to store and share your links."
                link="https://link-go-tree.vercel.app/"
                photoLink="./projects/Joblinker.png"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Tailwind" }
                ]}
            />
            <ProCard
                projectTitle="The Feedback Loop"
                description="Video analysis app that gives people insights of thier creations."
                link="https://github.com/NIXBLACK11/The-Feedback-Loop"
                photoLink="./projects/Joblinker.png"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Gemini" }
                ]}
            />
            <ProCard
                projectTitle="Chrome Extension using BERT"
                description="Utilized Google BERT for real-time text summarization, enhancing user productivity."
                link="https://github.com/NIXBLACK11/summarizationExtension"
                photoLink="./projects/Joblinker.png"
                skills={[
                    { name: "Python" },
                    { name: "Google BERT" },
                    { name: "HTML/CSS" },
                    { name: "Chrome Extensions" }
                ]}
            />
        </div>
    )
}