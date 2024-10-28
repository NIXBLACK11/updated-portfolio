import { Education } from "./Education"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import { Recommendations } from "./Recommendations"

export const ScrollSection = () => {
    return (
        <div className="mx-8 flex justify-center items-center flex-col mt-20" >
            <section className="font-custom secondary-color text-1xl" id="About">
                In 2021, I took the plunge into software development while pursuing my Bachelor's in <a className="font-custom font-color">Computer Science and Engineering</a>.Since then, I've had the opportunity to work on diverse projects, from contributing to open-source initiatives at <a className="font-custom font-color">Meta</a> to founding <a className="font-custom font-color">Nixarcade</a>, a decentralized gaming platform on Solana.
                <br/><br/>
                Currently, my focus is on creating innovative software solutions that blend functionality with user-friendly design. I thrive on building applications that not only perform seamlessly but also provide an enjoyable user experience. I'm passionate about leveraging my skills in <a className="font-custom font-color">Golang</a>, <a className="font-custom font-color">TypeScript,</a>, and <a className="font-custom font-color">Web3,</a> to drive meaningful projects forward.
                <br/><br/>
                When I’m not coding, you can find me playing video games, enjoying football, or hiking in the great outdoors.
            </section>
            <section className="mt-10  w-full px-0 mx-0" id="Experience">
                <div className="font-custom font-color text-4xl">Experience</div>
                <Experience/>
            </section>
            <section className="mt-10  w-full px-0 mx-0" id="Projects">
                <div className="font-custom font-color text-4xl">Projects</div>
                <Projects/>
            </section>
            <section className="mt-10 w-full px-0 mx-0" id="Education">
                <div className="font-custom font-color text-4xl">Education</div>
                <Education />
            </section>
            <section className="mt-10 w-full px-0 mx-0" id="Recommendations">
                <div className="font-custom font-color text-4xl">Recommendations</div>
                <Recommendations/>
            </section>
        </div>
    )
}