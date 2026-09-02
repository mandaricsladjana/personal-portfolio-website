import { Lightbulb, School, ExternalLink, FileText } from "lucide-react";

const highlights = [
    {
        title: "Bachelor's Degree",
        description: "Faculty of Technical Sciences, Novi Sad",
        degree: "Engineer of Management",

        studyLink: "https://www.ftn.uns.ac.rs/",

        thesis:
            "Risk Analysis of Using Cryptocurrency and Blockchain in Optimizing Logistics Processes",

        thesisFile: "/Theses/Bachelors-Thesis.pdf",

        logo: "/ProfilePhotos/FTNlogo.png",
        graduationPhoto: "/ProfilePhotos/bachelor-graduation.jpg",

        icon: Lightbulb,
    },

    {
        title: "Master's Degree",
        description: "Faculty of Technical Sciences, Novi Sad",
        degree: "Master Engineer of Management",

        studyLink: "https://www.ftn.uns.ac.rs/",

        thesis:
            "Risk Analysis of Using Cryptocurrency and Blockchain in Optimizing Logistics Processes",

        thesisFile: "/Theses/Masters-Thesis.pdf",

        logo: "/ProfilePhotos/FTNlogo.png",
        graduationPhoto: "/ProfilePhotos/master-graduation.jpg",

        icon: School,
    },
];

export const About = () => {
    return (
        <section
            id="about"
            className="py-32 relative overflow-hidden bg-gray-100"
        >
            {/* Keep the original right margin */}
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ================= LEFT COLUMN ================= */}

                    <div className="space-y-8 lg:pl-16">

                        <div className="animate-fade-in">

                            {/* Small heading */}
                            <span className="text-primary text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>

                            {/* Main heading */}
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2 animate-fade-in animation-delay-100">
                                From{" "}
                                <span className="text-primary italic font-serif">
                                    Logistics
                                </span>{" "}
                                to{" "}
                                <span className="text-primary italic font-serif">
                                    Analytics
                                </span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-4 mt-6 text-gray-700 animate-fade-in animation-delay-200">

                                <p>
                                    I collaborate with cross-functional teams
                                    across Finance, HR, HSE, and Production,
                                    turning raw data into clear, actionable
                                    insights using Excel, SQL, and Power BI.
                                    Along the way, I've also gained hands-on
                                    experience with Google, Meta, and LinkedIn
                                    Ads through side projects in digital
                                    marketing.
                                </p>

                                <p>
                                    I'm genuinely excited about data, curious
                                    by nature, and always eager to learn
                                    something new. I'm currently expanding my
                                    analytics skills in Python, Azure, and BI
                                    through certification courses while
                                    building a portfolio of case study
                                    projects on Medium and GitHub to showcase
                                    end-to-end analytics workflows—from raw
                                    data to business insights.
                                </p>

                            </div>

                            {/* Collaboration message */}
                            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 mt-8">

                                <p className="text-lg font-medium italic text-gray-600">
                                    If you share an interest in data and
                                    analytics, I'm open for collaboration,
                                    mentorship, and project suggestions —
                                    feel free to connect and message me 😊
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================= RIGHT COLUMN ================= */}

                    <div className="grid sm:grid-cols-2 gap-6">

                        {highlights.map((item, idx) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={idx}
                                    className="
                                        bg-white
                                        border border-gray-200
                                        p-6
                                        rounded-2xl
                                        shadow-sm
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        transition-all
                                        duration-300
                                        animate-fade-in
                                    "
                                    style={{
                                        animationDelay: `${(idx + 1) * 100}ms`,
                                    }}
                                >

                                    {/* ================= LOGO + ICON ================= */}

                                    <div className="flex items-center justify-between mb-5">

                                        {/* Faculty logo */}
                                        <div className="w-30 h-30 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center p-2">

                                            <img
                                                src={item.logo}
                                                alt="Faculty of Technical Sciences logo"
                                                className="w-full h-full object-contain"
                                            />

                                        </div>

                                        {/* Degree icon */}
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

                                            <Icon className="w-6 h-6 text-primary" />

                                        </div>

                                    </div>


                                    {/* ================= DEGREE TITLE ================= */}

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>


                                    {/* ================= FACULTY ================= */}

                                    <p className="text-gray-500 text-sm mb-3">
                                        {item.description}
                                    </p>


                                    {/* ================= DEGREE ================= */}

                                    <p className="text-sm font-semibold text-primary mb-4">
                                        {item.degree}
                                    </p>


                                    {/* ================= STUDY PROGRAM ================= */}

                                    <a
                                        href={item.studyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-medium
                                            text-gray-700
                                            hover:text-primary
                                            transition-colors
                                            mb-5
                                        "
                                    >
                                        View study program
                                        <ExternalLink className="w-4 h-4" />
                                    </a>


                                    {/* ================= GRADUATION PHOTO ================= */}

                                    <div className="relative overflow-hidden rounded-xl mb-5 group">

                                        <img
                                            src={item.graduationPhoto}
                                            alt={`${item.title} graduation`}
                                            className="
                                                w-full
                                                h-40
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-105
                                            "
                                        />

                                    </div>


                                    {/* ================= THESIS ================= */}

                                    <div className="border-t border-gray-200 pt-4">

                                        <span className="text-xs uppercase tracking-wider text-gray-400">
                                            Thesis
                                        </span>

                                        <p className="text-sm font-medium italic text-gray-600 mt-2">
                                            {item.thesis}
                                        </p>


                                        {/* Full thesis button */}

                                        <a
                                            href={item.thesisFile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                mt-4
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-primary
                                                text-white
                                                text-sm
                                                font-medium
                                                hover:bg-primary-dark
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            <FileText className="w-4 h-4" />
                                            View Full Thesis
                                        </a>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
};