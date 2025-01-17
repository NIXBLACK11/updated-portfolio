import { ExpCard } from "./ExpCard"

export const Experience = () => {
    return (
        <div className="w-full font-custom">
            <ExpCard
                dateRange="September(2024) — PRESENT"
                jobTitle="Member"
                company="Superteam India"
                description="Founded and actively developing Nixarcade, a Solana-powered multiplayer gaming platform. Architected the platform using Solana libraries, enabling decentralized transactions for the gaming dApp. Secured funding from the Solana Foundation and CoinDCX for the platform's development."
                link="https://superteam.fun/"
                skills={[
                { name: "Solana-web3.js" },
                { name: "TypeScript" },
                { name: "React" },
                { name: "Web-Socket" }
                ]}
            />
            <ExpCard
                dateRange="September(2023) — December(2023)"
                jobTitle="Software Developer Intern"
                company="Meta"
                description="Contributed to Meta’s open-source projects Laser and Sacremoses, resolving language list issues to improve accessibility, achieving parity between Perl and Python scripts, and demonstrating key functionalities to users."
                link="https://opensource.fb.com/partnerships/major-league-hacking/"
                skills={[
                { name: "Python" },
                { name: "Linux" },
                { name: "Machine Learning" },
                { name: "Py-Torch" }
                ]}
            />
        </div>
    )
}