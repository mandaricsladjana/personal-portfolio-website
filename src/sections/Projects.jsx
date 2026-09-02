import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Building a SQL Cleaning & Preparation Layer",
        description:
            "Complete analytical process, from importing and understanding raw data, performing data profiling and quality checks, and identifying critical data issues using SQL with a goal to create a consistent and reusable cleaning data layer for Power BI.",
        image: "/ProjectsPhotos/Project1Profile.png",
        tags: ["SQL Management Studio", "SQL Views"],
        link: "https://medium.com/p/0eb32dbc058c/edit",
        github: "https://github.com/",
    },

    {
        title: "Interactive Data Quality Power BI Dashboard",
        description:
            "A hands-on look at dynamic KPIs, interactive filters, custom navigation buttons, dynamic titles, selected-record previews, detailed tables, and city-level data quality analysis for the real estate dataset.",
        image: "/ProjectsPhotos/Project1Profile.png",
        tags: ["SQL Management Studio", "Power BI"],
        link: "https://medium.com/p/0eb32dbc058c/edit",
        github: "https://github.com/",
    },

    {
        title: "From Excel to Power BI: Creating an Automated Data Pipeline Using Azure",
        description:
            "The result was a cloud-based data workflow built on Azure, connecting Excel through SQL to a Power BI dashboard with automated refresh — cutting manual update work by roughly 90%.",
        image: "/ProjectsPhotos/Project3Profile.png",
        tags: [
            "Microsoft Azure",
            "Blob Storage",
            "Azure SQL Database",
            "Azure Data Factory",
            "Power BI",
        ],
        link: "https://medium.com/p/0eb32dbc058c/edit",
        github: "",
    },

    {
        title: "My First Portfolio Website",
        description:
            "How I built my first personal portfolio website using React, Tailwind CSS and Vite.",
        image: "/ProjectsPhotos/Project3Profile.png",
        tags: ["React", "Tailwind CSS", "Vite"],
        link: "https://medium.com/",
        github: "https://github.com/",
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-gray-100 border-t border-gray-300"
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />


            {/* ================= CONTENT ================= */}

            <div className="container mx-auto px-10 md:px-16 lg:px-24 relative z-10">


                {/* ================= SECTION TITLE ================= */}

                <div className="pt-8 pb-12 text-center">

                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        My Work
                    </span>

                    <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-1">

                        Featured{" "}

                        <span className="text-primary italic font-serif">
                            Projects
                        </span>

                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        A selection of projects where I combine data,
                        technology, and problem-solving to create meaningful
                        and practical solutions.
                    </p>

                </div>


                {/* ================= PROJECT GRID ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {projects.map((project, index) => (

                        <article
                            key={index}
                            className="
                                group
                                bg-white
                                rounded-2xl
                                overflow-hidden
                                border border-gray-200
                                shadow-sm
                                transition-all
                                duration-500
                                ease-in-out
                                hover:-translate-y-1
                                hover:border-purple-400
                                hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]
                            "
                        >

                            {/* ================= PROJECT IMAGE ================= */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                                        w-full
                                        h-64
                                        md:h-72
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-in-out
                                        group-hover:scale-105
                                    "
                                />

                                {/* Image overlay */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-linear-to-t
                                        from-black/40
                                        via-transparent
                                        to-transparent
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity
                                        duration-500
                                        ease-in-out
                                    "
                                />

                            </div>


                            {/* ================= PROJECT CONTENT ================= */}

                            <div className="p-7">


                                {/* ================= TITLE ================= */}

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                        mb-3
                                        transition-colors
                                        duration-500
                                        ease-in-out
                                        group-hover:text-purple-600
                                    "
                                >
                                    {project.title}
                                </h3>


                                {/* ================= DESCRIPTION ================= */}

                                <p className="text-gray-600 leading-relaxed mb-5">
                                    {project.description}
                                </p>


                                {/* ================= TAGS ================= */}

                                <div className="flex flex-wrap gap-2 mb-7">

                                    {project.tags.map((tag, tagIndex) => (

                                        <span
                                            key={tagIndex}
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-purple-50
                                                text-purple-700
                                                border
                                                border-purple-100
                                            "
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>


                                {/* ================= PROJECT BUTTONS ================= */}

                                <div className="flex flex-wrap gap-3">

                                    {/* VIEW PROJECT */}

                                    {project.link && (

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                px-5
                                                py-2.5
                                                rounded-full
                                                bg-primary
                                                text-white
                                                text-sm
                                                font-bold
                                                transition-all
                                                duration-300
                                                ease-in-out
                                                hover:bg-purple-700
                                                hover:shadow-[0_0_15px_rgba(124,58,237,0.45)]
                                            "
                                        >
                                            View Project
                                        </a>

                                    )}


                                    {/* GITHUB */}

                                    {project.github && (

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                px-5
                                                py-2.5
                                                rounded-full
                                                border-2
                                                border-primary
                                                text-primary
                                                text-sm
                                                font-bold
                                                transition-all
                                                duration-300
                                                ease-in-out
                                                hover:bg-primary
                                                hover:text-white
                                                hover:shadow-[0_0_15px_rgba(124,58,237,0.45)]
                                            "
                                        >
                                            GitHub
                                        </a>

                                    )}

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* ================================================== */}
                {/* VIEW ALL PROJECTS BUTTON */}
                {/* ================================================== */}

                <div className="flex justify-center pt-12 pb-20">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            relative
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            px-8
                            py-3.5
                            rounded-full
                            bg-white
                            text-purple-600
                            text-base
                            font-bold
                            border-2
                            border-purple-300
                            overflow-hidden
                            transition-all
                            duration-300
                            ease-out
                            hover:bg-purple-100
                            hover:text-purple-700
                            hover:border-purple-400
                            hover:shadow-[0_0_22px_rgba(124,58,237,0.25)]
                            hover:-translate-y-0.5
                        "
                    >

                        {/* ================= ANIMATED BORDER ================= */}

                        <span
                            className="
                                absolute
                                inset-0
                                rounded-full
                                pointer-events-none
                                border-2
                                border-transparent
                                transition-all
                                duration-500
                                group-hover:border-purple-500
                                group-hover:shadow-[inset_0_0_12px_rgba(124,58,237,0.15)]
                            "
                        />


                        {/* ================= BUTTON TEXT ================= */}

                        <span className="relative z-10">
                            View All Projects
                        </span>


                        {/* ================= LINK ARROW ================= */}

                        <ArrowUpRight
                            className="
                                relative
                                z-10
                                w-5
                                h-5
                                stroke-[2.5]
                                transition-all
                                duration-300
                                ease-out
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                        />

                    </a>

                </div>

            </div>

        </section>
    );
};