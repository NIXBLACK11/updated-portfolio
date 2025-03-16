import { ExpCard } from "./ExpCard"

export const Experience = () => {
    return (
        <div className="w-full font-custom">
            <ExpCard
                dateRange="March(2025) — PRESENT"
                jobTitle="Full Stack Engineer"
                company="WERATE"
                description="Exciting things coming soon! 🚀..."
                link="https://www.werate.io/"
                // companyImage="https://cdn.prod.website-files.com/66faa6ad5cd6edc16b2c3989/66fbfff805ba788c019ab8d7_weRate-Logo-Full-Horizontal-White.svg"
                skills={[
                    { name: "Golang" },
                    { name: "TypeScript" },
                    { name: "React Native" },
                    { name: "Fastify" },
                ]}
            />
            <ExpCard
                dateRange="September(2024) — PRESENT"
                jobTitle="Founder"
                company="NIXARCADE"
                description="Founded and actively developing Nixarcade, a Solana-powered multiplayer gaming platform. Architected the platform using Solana libraries, enabling decentralized transactions for the gaming dApp. Secured funding from the Solana Foundation and CoinDCX for the platform's development."
                link="https://nixarcade.fun/"
                // companyImage="companies/nixarcade.png"
                skills={[
                    { name: "Solana-web3.js" },
                    { name: "TypeScript" },
                    { name: "React" },
                    { name: "Web-Socket" },
                    { name: "Rust" }
                ]}
            />
            <ExpCard
                dateRange="September(2023) — December(2023)"
                jobTitle="Software Developer Fellowship"
                company="Meta"
                description="Contributed to Meta’s open-source projects Laser and Sacremoses, resolving language list issues to improve accessibility, achieving parity between Perl and Python scripts, and demonstrating key functionalities to users."
                link="https://opensource.fb.com/partnerships/major-league-hacking/"
                // companyImage="companies/meta.png"
                skills={[
                    { name: "Python" },
                    { name: "Linux" },
                    { name: "Machine Learning" },
                    { name: "Py-Torch" }
                ]}
            />
            {/* <ExpCard
                dateRange="October(2024) — January(2025)"
                jobTitle="WEB3 Developer"
                company="Skytrade"
                description="Developed NFT marketplaces, integrated Dropbox for asset storage, built cross-chain bridges, and contributed to various Web3 solutions."
                link="https://sky.trade/"
                skills={[
                    { name: "Typescript" },
                    { name: "React" },
                    { name: "Tailwind" },
                    { name: "Solana-web3.js" },
                    { name: "Metaplex" }
                ]}
            /> */}
        </div>
    )
}