import TiltWrapper from "./TiltWrapper"

export const Recommendations = () => {
    return (
        <div className="w-full">
            <TiltWrapper options={{ max: 5, speed: 10 }} className='mt-10 rounded-lg  w-full'>
                <a href="https://www.linkedin.com/in/kevin-h-a556796/" target='_blank' className="rounded-lg">
                    <h3 className="font-color text-xl font-custom mb-1">Kevin Heffernan</h3>
                    <h4 className="text-[#16F096] text-lg mb-3">Tech Lead at FAIR (Meta AI Research)</h4>
                    <p className="font-custom secondary-color mb-4">
                    I am grateful for the opportunity to have <span className="font-custom font-color">co-mentored</span> Siddharth during his <span className="font-custom font-color">MLH fellowship</span> with <span className="font-custom font-color">Meta AI</span>. Over the course of the program, Siddharth established himself as a <span className="font-custom font-color">core contributor</span> of the <span className="font-custom font-color">laser_encoders</span> package <a href="https://github.com/facebookresearch/LASER/tree/main/laser_encoders" target="_blank" className="font-custom text-white">LASER</a>, and made <span className="font-custom font-color">significant contributions</span> to the <span className="font-custom font-color">AI research community</span>. One such contribution was the <span className="font-custom font-color">resolution of a hard-to-find</span> and longstanding bug with an existing <span className="font-custom font-color">open-sourced</span> and widely used <span className="font-custom font-color">Python library</span> in ML research. Siddharth not only <span className="font-custom font-color">found the solution</span>, but also quickly <span className="font-custom font-color">sent a pull request</span> to the project, and <span className="font-custom font-color">landed it</span>! It was a <span className="font-custom font-color">pleasure to work with</span> Siddharth, and I'm hoping that our paths will cross again sometime in the near future!
                    </p>
                </a>
            </TiltWrapper>
        </div>
    )
}