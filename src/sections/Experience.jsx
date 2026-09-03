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
    return (
        <section
            id="experience"
            className="
                py-32
                relative
                overflow-hidden
                bg-purple-50/40
            "
        >

            {/* ================= BACKGROUND IMAGE ================= */}


            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/ProfilePhotos/background7a.jpg"
                    alt="Experience image"
                    className="w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/85"></div>
            </div>


            {/* Lilac overlay over background image */}

            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-purple-100/70
                    mix-blend-multiply
                "
            />

            {/* Soft lilac glow */}

            <div
                className="
                    absolute
                    top-1/2
                    left-1/4
                    w-96
                    h-96
                    bg-purple-300/15
                    rounded-full
                    blur-3xl
                    -translate-y-1/2
                    pointer-events-none
                "
            />

            {/* ================= CONTENT ================= */}

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
                            text-white
                        "
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
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
                        max-w-3xl
                        mx-auto
                        rounded-3xl
                        border-3
                        border-primary/40
                        mb-20
                        overflow-hidden
                        bg-white/92
                        backdrop-blur-sm
                        shadow-[0_10px_40px_rgba(139,92,246,0.12)]
                        stats-glow
                    "
                >

                    <div className="grid grid-cols-2 md:grid-cols-4">

                        {/* STAT 1 */}

                        <div className="
                        relative 
                        px-6 
                        py-5 
                        md:px-8 
                        md:py-6 
                        text-left 
                        hover:text-primary
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/30
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300">

                            <p className="text-sm md:text-base font-medium text-black mb-1">
                                Years of Experience
                            </p>

                            <p className="text-3xl md:text-4xl font-bold text-purple-950">
                                5+
                            </p>

                            <div className="hidden md:block absolute right-0 top-5 bottom-5 border-r-3 border-primary/70" />

                        </div>


                        {/* STAT 2 */}

                        <div className="
                        relative 
                        px-6 
                        py-5 
                        md:px-8 
                        md:py-6 
                        text-left 
                        hover:text-primary
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/30
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300">

                            <p className="text-sm md:text-base font-medium text-black mb-1">
                                Projects Completed
                            </p>

                            <p className="text-3xl md:text-4xl font-bold text-purple-950">
                                20+
                            </p>

                            <div className="hidden md:block absolute right-0 top-5 bottom-5 border-r-3 border-primary/70" />

                        </div>


                        {/* STAT 3 */}

                        <div className="
                        relative 
                        px-6 
                        py-5 
                        md:px-8 
                        md:py-6 
                        text-left 
                        hover:text-primary
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/30
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300">

                            <p className="text-sm md:text-base font-medium text-black mb-1">
                                Tools & Technologies
                            </p>

                            <p className="text-3xl md:text-4xl font-bold text-purple-950">
                                15+
                            </p>

                            <div className="hidden md:block absolute right-0 top-5 bottom-5 border-r-3 border-primary/70" />

                        </div>


                        {/* STAT 4 */}

                        <div className="
                        relative 
                        px-6 
                        py-5 
                        md:px-8 
                        md:py-6 
                        text-left 
                        hover:text-primary
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/30
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300">

                            <p className="text-sm md:text-base font-medium text-black mb-1 transition-all duration-300 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                                Professional Domains
                            </p>

                            <p className="text-3xl md:text-4xl font-bold text-purple-950">
                                4
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================= LARGE EXPERIENCE CONTAINER ================= */}

                <div
                    className="
                        relative
                        w-full
                        rounded-[3rem]
                        border
                        border-purple-300/40
                        bg-white/50
                        backdrop-blur-sm
                        px-6
                        py-12
                        md:px-12
                        md:py-16
                        shadow-[0_10px_50px_rgba(139,92,246,0.10)]
                        overflow-hidden
                    "
                >

                    {/* Subtle inner glow */}

                    <div
                        className="
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-150
                            h-150
                            bg-purple-300/10
                            rounded-full
                            blur-3xl
                            pointer-events-none
                        "
                    />


                    {/* ================= TIMELINE ================= */}

                    <div className="relative z-10 pt-6 md:pt-8">

                        {/* Timeline Line */}

                        <div
                            className="
                                timeline-glow
                                absolute
                                left-0
                                md:left-1/2
                                top-0
                                bottom-0
                                w-1
                                bg-linear-to-b
                                from-primary-dark
                                via-primary-dark/80
                                to-primary/20
                                md:-translate-x-1/2
                                shadow-[0_0_30px_rgba(32,178,166,0.9)]
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
                                            top-1/2
                                            -translate-y-1/2
                                            w-4
                                            h-4
                                            rounded-full
                                            bg-primary
                                            border-4
                                            border-purple-100
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
                                                    bg-white/80
                                                    p-6
                                                    rounded-2xl
                                                    border-3
                                                    border-primary-dark/80
                                                    bg-purple-50/45
                                                    backdrop-blur-md
                                                    shadow-[0_10px_30px_rgba(139,92,246,0.10)]
                                                    transition-all
                                                    duration-500
                                                    group-hover:border-purple-500
                                                    group-hover:bg-purple-100/60
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
                                                        group-hover:text-purple-500
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
                                                        text-black
                                                        transition-colors
                                                        duration-500
                                                        group-hover:text-purple-600
                                                    "
                                                >
                                                    {exp.role}
                                                </h3>


                                                {/* Company */}

                                                <p
                                                    className="
                                                        text-purple-900/70
                                                        transition-colors
                                                        duration-500
                                                        group-hover:text-purple-700
                                                    "
                                                >
                                                    {exp.company}
                                                </p>


                                                {/* Description */}

                                                <p
                                                    className="
                                                        text-sm
                                                        text-purple-900/60
                                                        mt-4
                                                        transition-colors
                                                        duration-500
                                                        group-hover:text-purple-800
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
                                                                    bg-purple-500/10
                                                                    text-purple-700
                                                                    border
                                                                    border-purple-400/20
                                                                    transition-all
                                                                    duration-500
                                                                    group-hover:bg-purple-500/15
                                                                    group-hover:text-purple-600
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

            </div>

        </section>
    );
};