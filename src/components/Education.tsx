import { EduCard } from "./EduCard"

export const Education = () => {
    return (
        <div className="w-full">
            <EduCard
                dateRange="2009 — 2021"
                course="Secondary (ICSE) and Higher Secondary (ISC)"
                inst="St.Joseph's College | Nainital"
                link="https://www.stjosephscollege.in/"
            />
            <EduCard
                dateRange="2021 — Pursuing"
                course="Bachelor of Technology in Computer Science and Engineering"
                inst="Graphic Era Hill University | Dehradun"
                link="https://www.gehu.ac.in/"
            />
        </div>
    )
}