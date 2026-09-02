import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CalendarDays,
    BriefcaseBusiness,
    CheckCircle2,
    Lightbulb,
} from "lucide-react";

export default function ExperienceQualityEngineer() {
    const responsibilities = [
        "Worked across quality engineering and data analytics activities within Continental Automotive.",
        "Defined, monitored and reported quality KPIs to support process and performance monitoring.",
        "Built and maintained analytical reports and dashboards using Power BI and Excel.",
        "Used SQL to query, transform and analyze quality and operational data.",
        "Prepared datasets and performed data analysis to identify trends, deviations and areas for improvement.",
        "Supported quality teams with data-driven reporting and performance analysis.",
        "Analyzed quality data to support root cause analysis and continuous improvement activities.",
        "Worked with automotive quality standards and structured problem-solving methodologies.",
        "Prepared clear reports and visualizations to communicate quality performance to stakeholders.",
        "Supported process optimization by combining quality engineering knowledge with data analysis.",
    ];

    const skills = [
        "Quality Engineering",
        "Data Analytics",
        "Quality KPI Management",
        "KPI Reporting",
        "Data Analysis",
        "SQL",
        "Power BI",
        "Microsoft Excel",
        "Data Visualization",
        "Root Cause Analysis",
        "Process Optimization",
        "Continuous Improvement",
        "FMEA",
        "Fault Tree Analysis",
        "Fishbone Analysis",
        "IATF 16949",
        "VDA 6.3",
    ];

    const tools = [
        "Power BI",
        "Microsoft Excel",
        "SQL",
        "Microsoft SQL Server",
        "Azure",
        "Python",
    ];

    const projects = [
        {
            title: "Quality KPI Reporting",
            description:
                "Defined, monitored and analyzed quality KPIs and transformed quality data into structured reports and visual dashboards for performance monitoring.",
            tags: ["Power BI", "KPI Reporting", "Quality Analytics"],
        },

        {
            title: "SQL Data Analysis",
            description:
                "Used SQL to query, transform and analyze quality-related datasets, supporting reporting, data validation and deeper analysis of operational performance.",
            tags: ["SQL", "Data Analysis", "Data Transformation"],
        },

        {
            title: "Quality Data Dashboards",
            description:
                "Developed Power BI dashboards and Excel reports to present quality performance, trends and key indicators in a clear and accessible format.",
            tags: ["Power BI", "Excel", "Data Visualization"],
        },

        {
            title: "Root Cause & Process Analysis",
            description:
                "Combined analytical data with structured quality methodologies to investigate deviations, identify potential root causes and support process improvement.",
            tags: ["FMEA", "Fishbone", "Root Cause Analysis"],
        },
    ];

    const achievements = [
        "Improved visibility into quality performance through structured KPI reporting and dashboards.",
        "Combined quality engineering knowledge with SQL, Excel and Power BI to support data-driven decisions.",
        "Supported quality and process improvement activities through analytical reporting and structured problem solving.",
    ];

    const learned = [
        "How quality engineering and data analytics can work together to improve process performance.",
        "How to define, monitor and communicate quality KPIs effectively.",
        "How to use SQL, Excel and Power BI to analyze and report quality data.",
        "How data analysis can support root cause analysis and continuous improvement.",
        "How automotive quality standards influence processes, measurements and reporting.",
        "How structured problem-solving methods can be combined with data-driven analysis.",
    ];

    return (
        <main className="min-h-screen bg-white text-black">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 pt-35 pb-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.25em] text-xs opacity-50 mb-7">
                        Professional Experience
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-semibold tracking-tight leading-[0.88] max-w-6xl">
                        Quality Engineer / Data Analyst
                    </h1>

                    <p className="text-xl md:text-3xl mt-8 opacity-60">
                        Continental Automotive
                    </p>

                    {/* TIMESTAMP */}

                    <div className="flex flex-wrap gap-4 md:gap-8 mt-10">

                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm">
                            <CalendarDays size={16} />
                            2025 — 2026
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm">
                            <BriefcaseBusiness size={16} />
                            Novi Sad, Serbia
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OVERVIEW
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/10">

                <div className="max-w-7xl grid lg:grid-cols-[0.25fr_1fr] gap-10 lg:gap-20">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50">
                        Overview
                    </p>

                    <p className="text-2xl md:text-4xl lg:text-5xl leading-[1.05] max-w-5xl">
                        A hybrid quality engineering and data analytics role
                        focused on quality KPI management, reporting, SQL,
                        Excel, Power BI, data analysis, process optimization
                        and structured problem solving within the automotive
                        industry.
                    </p>

                </div>

            </section>


            {/* =====================================================
                WHAT I DID
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-black text-white">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-14">
                        What I did
                    </p>

                    <div className="grid md:grid-cols-2 gap-x-16">

                        {responsibilities.map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-6 py-7 border-t border-white/20"
                            >

                                <span className="text-xs opacity-40 pt-1">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-lg md:text-xl leading-relaxed">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                SKILLS
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Skills & Expertise
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {skills.map((skill) => (

                            <span
                                key={skill}
                                className="px-5 py-3 rounded-full border border-black/15 text-sm hover:bg-black hover:text-white transition"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>


                    {/* TOOLS */}

                    <div className="mt-20">

                        <p className="text-sm opacity-50 mb-6">
                            Tools & Technologies
                        </p>

                        <div className="flex flex-wrap gap-3">

                            {tools.map((tool) => (

                                <span
                                    key={tool}
                                    className="px-4 py-2 rounded-full bg-black text-white text-sm"
                                >
                                    {tool}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                PROJECTS
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-neutral-100">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Selected Work
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        {projects.map((project, index) => (

                            <article
                                key={index}
                                className="bg-white rounded-4xl p-8 md:p-10 min-h-87.5 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
                            >

                                <div>

                                    <span className="text-xs tracking-[0.15em] opacity-40">
                                        PROJECT {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-medium mt-6">
                                        {project.title}
                                    </h3>

                                    <p className="mt-6 text-base md:text-lg leading-relaxed opacity-60 max-w-xl">
                                        {project.description}
                                    </p>

                                </div>

                                <div className="flex flex-wrap gap-2 mt-10">

                                    {project.tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-2 rounded-full border border-black/10"
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                IMPACT
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24">

                <div className="max-w-7xl">

                    <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-12">
                        Impact
                    </p>

                    <div className="grid md:grid-cols-3 gap-5">

                        {achievements.map((achievement, index) => (

                            <div
                                key={index}
                                className="rounded-4xl border border-black/10 p-8 md:p-10 min-h-62.5"
                            >

                                <CheckCircle2 size={22} />

                                <p className="mt-10 text-lg md:text-xl leading-relaxed">
                                    {achievement}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I LEARNED
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 bg-neutral-100">

                <div className="max-w-7xl">

                    <div className="flex items-center gap-3 mb-14">

                        <Lightbulb size={22} />

                        <p className="uppercase tracking-[0.2em] text-xs opacity-50">
                            What I learned
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-x-16">

                        {learned.map((item, index) => (

                            <div
                                key={index}
                                className="py-8 border-t border-black/10"
                            >

                                <div className="flex gap-5">

                                    <span className="text-xs opacity-30 pt-2">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-xl md:text-2xl leading-snug">
                                        {item}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                BACK TO PORTFOLIO
            ===================================================== */}

            <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-black/10">

                <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12">

                    <div>

                        <p className="uppercase tracking-[0.2em] text-xs opacity-50 mb-5">
                            Continue exploring
                        </p>

                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                            My Experience
                        </h2>

                    </div>

                    <Link
                        to="/"
                        className="self-start md:self-end inline-flex items-center gap-3 px-7 py-4 rounded-full bg-black text-white hover:opacity-80 transition"
                    >
                        Back to portfolio
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

        </main>
    );
}
