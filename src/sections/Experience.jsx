import { Link } from "react-router-dom";

const experience = [
{
period: "2026 - Present",
role: "Data Analytics",
icon: "",
company: "Freelance",
description: "KPI Management, Dashboard building",
technologies: ["Power BI", "SQL", "Git", "Github"],
current: true,
path: "/experience/data-analytics",
},

{
    period: "2026 - Present",
    role: "Google & Instagram Ads Management",
    icon: "",
    company: "Freelance",
    description:
        "Ads Management, tracking, campaign creation and optimization",
    technologies: ["Google Analytics 4", "Google Ads"],
    current: true,
    path: "/experience/ads",
},

{
    period: "2025 - 2026",
    role: "Quality Engineer / Data Analyst",
    icon: "",
    company: "Continental Automotive | Novi Sad, Serbia",
    description:
        "Quality KPI defining, monitoring, reports, process optimization",
    technologies: ["Power BI", "Excel", "SQL", "Azure"],
    current: false,
    path: "/experience/quality-engineer",
},

{
    period: "2023 - 2025",
    role: "Logistics & Supply Chain Manager",
    icon: "",
    company: "Novus M Plus Trade | Novi Sad, Serbia",
    description:
        "Quality KPI defining, monitoring, reports, process optimization",
    technologies: ["Power BI", "Excel", "SQL", "SAP"],
    current: false,
    path: "/experience/logistics",
},

];

export const Experience = () => {
return ( <section
         id="experience"
         className="py-32 relative overflow-hidden"
     >

        {/* Background Glow */}
        <div
            className="
                absolute
                top-1/2
                left-1/4
                w-96
                h-96
                bg-primary/5
                rounded-full
                blur-3xl
                -translate-y-1/2
                pointer-events-none
            "
        />

        <div className="container mx-auto px-6 relative z-10">

            {/* ================= SECTION HEADER ================= */}

            <div className="max-w-3xl mb-16 mx-auto text-center">

                <span
                    className="
                        text-primary
                        text-sm
                        font-medium
                        tracking-wider
                        uppercase
                        animate-fade-in
                    "
                >
                    Career Journey
                </span>

                <h2
                    className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-4
                        mb-6
                        animate-fade-in
                        animation-delay-100
                        text-primary
                    "
                >
                    Experience that{" "}
                    <span className="font-serif italic font-normal text-purple-dark">
                        speaks volumes
                    </span>
                </h2>

                <p
                    className="
                        text-primary
                        animate-fade-in
                        animation-delay-200
                    "
                >
                    "A timeline of my professional growth, from curious
                    beginner to today"
                </p>

            </div>

{/* ================= EXPERIENCE STATS ================= */}

<div
    className="
        relative
        w-full
        rounded-3xl
        border
        border-purple-900/70
        mb-20
        overflow-hidden
        bg-purple-950/50
        shadow-[0_0_30px_rgba(88,28,135,0.25)]
        stats-glow
    "
>
    <div className="grid grid-cols-2 md:grid-cols-4">

        {/* STAT 1 */}
        <div className="relative px-6 py-8 md:px-8 md:py-10 text-center">

            <p className="text-sm md:text-base font-medium text-purple-200 mb-2">
                Years of Experience
            </p>

            <p className="text-3xl md:text-4xl font-bold text-white">
                5+
            </p>

            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 border-r border-dashed border-purple-800/70" />

        </div>


        {/* STAT 2 */}
        <div className="relative px-6 py-8 md:px-8 md:py-10 text-center">

            <p className="text-sm md:text-base font-medium text-purple-200 mb-2">
                Projects Completed
            </p>

            <p className="text-3xl md:text-4xl font-bold text-white">
                20+
            </p>

            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 border-r border-dashed border-purple-800/70" />

        </div>


        {/* STAT 3 */}
        <div className="relative px-6 py-8 md:px-8 md:py-10 text-center">

            <p className="text-sm md:text-base font-medium text-purple-200 mb-2">
                Tools & Technologies
            </p>

            <p className="text-3xl md:text-4xl font-bold text-white">
                15+
            </p>

            {/* Separator */}
            <div className="hidden md:block absolute right-0 top-6 bottom-6 border-r border-dashed border-purple-800/70" />

        </div>


        {/* STAT 4 */}
        <div className="px-6 py-8 md:px-8 md:py-10 text-center">

            <p className="text-sm md:text-base font-medium text-purple-200 mb-2">
                Professional Domains
            </p>

            <p className="text-3xl md:text-4xl font-bold text-white">
                4
            </p>

        </div>

    </div>
</div>








            {/* ================= TIMELINE ================= */}

            <div className="relative">

                {/* Timeline Line */}

                <div
                    className="
                        timeline-glow
                        absolute
                        left-0
                        md:left-1/2
                        top-0
                        bottom-0
                        w-0.5
                        bg-linear-to-b
                        from-primary/70
                        via-primary/30
                        to-transparent
                        md:-translate-x-1/2
                        shadow-[0_0_25px_rgba(32,178,166,0.8)]
                    "
                />

                {/* ================= EXPERIENCE ITEMS ================= */}

                <div className="space-y-12">

                    {experience.map((exp, idx) => (

                        <div
                            key={idx}
                            className="
                                relative
                                grid
                                md:grid-cols-2
                                gap-8
                                animate-fade-in
                            "
                            style={{
                                animationDelay: `${(idx + 1) * 150}ms`,
                            }}
                        >

                            {/* Timeline Dot */}

                            <div
                                className={`
                                    absolute
                                    left-0
                                    md:left-1/2
                                    top-8
                                    w-4
                                    h-4
                                    rounded-full
                                    bg-primary
                                    border-4
                                    border-background
                                    md:-translate-x-1/2
                                    shadow-[0_0_15px_rgba(32,178,166,0.8)]
                                    z-10
                                    ${exp.current ? "current-dot" : ""}
                                `}
                            >
                                {exp.current && (
                                    <span
                                        className="
                                            absolute
                                            inset-0
                                            rounded-full
                                            bg-purple-500
                                            animate-ping
                                            opacity-75
                                        "
                                    />
                                )}
                            </div>

                            {/* ================= CONTENT ================= */}

                            <div
                                className={`
                                    pl-8
                                    md:pl-0
                                    ${
                                        idx % 2 === 0
                                            ? "md:pr-16 md:text-right"
                                            : "md:col-start-2 md:pl-16"
                                    }
                                `}
                            >

                                {/* Clickable Bubble */}

                                <Link
                                    to={exp.path}
                                    className="block group relative z-20"
                                >

                                    <div
                                        className="
                                            glass
                                            p-6
                                            rounded-2xl
                                            border
                                            border-primary/30
                                            transition-all
                                            duration-500
                                            group-hover:border-purple-500
                                            group-hover:bg-purple-500/10
                                            group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                                            group-hover:-translate-y-1
                                        "
                                    >

                                        {/* Period */}

                                        <span
                                            className="
                                                text-sm
                                                text-primary
                                                font-medium
                                                transition-colors
                                                duration-500
                                                group-hover:text-purple-400
                                            "
                                        >
                                            {exp.period}
                                        </span>

                                        {/* Role */}

                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                mt-2
                                                transition-colors
                                                duration-500
                                                group-hover:text-purple-400
                                            "
                                        >
                                            {exp.role}
                                        </h3>

                                        {/* Company */}

                                        <p
                                            className="
                                                text-muted
                                                transition-colors
                                                duration-500
                                                group-hover:text-purple-300
                                            "
                                        >
                                            {exp.company}
                                        </p>

                                        {/* Description */}

                                        <p
                                            className="
                                                text-sm
                                                text-muted
                                                mt-4
                                                transition-colors
                                                duration-500
                                                group-hover:text-purple-200
                                            "
                                        >
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}

                                        <div
                                            className={`
                                                flex
                                                flex-wrap
                                                gap-2
                                                mt-4
                                                ${
                                                    idx % 2 === 0
                                                        ? "md:justify-end"
                                                        : ""
                                                }
                                            `}
                                        >

                                            {exp.technologies.map(
                                                (tech, techIdx) => (

                                                    <span
                                                        key={techIdx}
                                                        className="
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-xs
                                                            font-medium
                                                            bg-primary/10
                                                            text-primary
                                                            border
                                                            border-primary/20
                                                            transition-all
                                                            duration-500
                                                            group-hover:bg-purple-500/10
                                                            group-hover:text-purple-400
                                                            group-hover:border-purple-500/30
                                                        "
                                                    >
                                                        {tech}
                                                    </span>

                                                )
                                            )}

                                        </div>

                                    </div>

                                </Link>

                            </div>

                            

                        </div>

                    ))}

                </div>

            </div>

        </div>

    </section>
);


};
