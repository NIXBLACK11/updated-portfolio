import { About } from "../components/About"
import { ScrollSection } from "../components/Scroll"

export const Landing = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-[40%] h-full">
                <About />
            </div>
            <div className="w-[60%] h-full overflow-y-auto">
                <ScrollSection />
            </div>
        </div>
    )
}