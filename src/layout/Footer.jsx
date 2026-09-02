import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const socialLinks = [
    {
        icon: FaGithub,
        href: "#",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/sladjanamandaric/",
        label: "LinkedIn",
    },
    {
        icon: FaMedium,
        href: "https://medium.com/@mandaricsladjana",
        label: "Medium",
    },
];

const footerLinks = [
    {
        href: "#about",
        label: "About",
    },
    {
        href: "#projects",
        label: "Projects",
    },
    {
        href: "#experience",
        label: "Experience",
    },
    {
        href: "#contact",
        label: "Contact",
    },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-black
                border-t
                border-purple-500/20
            "
        >

            {/* ================= BACKGROUND ================= */}

            <div className="absolute inset-0 pointer-events-none">

                {/* Main purple glow */}

                <div
                    className="
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        w-175
                        h-87.5
                        bg-purple-600/10
                        rounded-full
                        blur-3xl
                    "
                />

                {/* Left glow */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        w-75
                        h-75
                        bg-purple-600/5
                        rounded-full
                        blur-3xl
                    "
                />

                {/* Right glow */}

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-75
                        h-75
                        bg-purple-500/5
                        rounded-full
                        blur-3xl
                    "
                />

            </div>


            {/* ================= CONTENT ================= */}

            <div
                className="
                    container
                    mx-auto
                    px-6
                    relative
                    z-10
                "
            >

                {/* ================= TOP FOOTER ================= */}

                <div
                    className="
                        py-16
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-12
                    "
                >

                    {/* ================= BRAND ================= */}

                    <div className="text-center md:text-left">

                        {/* Logo */}

                        <a
                            href="#"
                            className="
                                inline-block
                                w-16
                                h-16
                                rounded-full
                                overflow-hidden
                                border
                                border-purple-500/30
                                hover:border-purple-500/70
                                transition-all
                                duration-300
                            "
                        >
                            <img
                                src="/ProfilePhotos/footer-logo.png"
                                alt="Sladjana Mandaric"
                                className="w-full h-full object-cover"
                            />
                        </a>


                        {/* Description */}

                        <p
                            className="
                                mt-4
                                max-w-sm
                                text-sm
                                leading-6
                                text-white/60
                            "
                        >
                            Quality Engineer, Data Analyst, and Ads Manager
                            combining analytical thinking, data, and
                            creativity to build meaningful solutions.
                        </p>


                        {/* Availability */}

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-6
                                px-4
                                py-2
                                rounded-full
                                bg-white/5
                                border
                                border-purple-500/20
                                text-sm
                                text-white/70
                            "
                        >

                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-green-400
                                    animate-pulse
                                "
                            />

                            Currently available

                        </div>

                    </div>


                    {/* ================= NAVIGATION ================= */}

                    <div className="text-center md:text-left">

                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-white
                                mb-6
                            "
                        >
                            Navigation
                        </h3>


                        <nav>

                            <ul className="space-y-3">

                                {footerLinks.map((link) => (

                                    <li key={link.label}>

                                        <a
                                            href={link.href}
                                            className="
                                                inline-block
                                                text-sm
                                                text-white/60
                                                hover:text-purple-500
                                                hover:translate-x-1
                                                transition-all
                                                duration-300
                                            "
                                        >
                                            {link.label}
                                        </a>

                                    </li>

                                ))}

                            </ul>

                        </nav>

                    </div>


                    {/* ================= SOCIALS ================= */}

                    <div className="text-center md:text-left">

                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-white
                                mb-6
                            "
                        >
                            Let's Connect
                        </h3>


                        <p
                            className="
                                text-sm
                                leading-6
                                text-white/60
                                max-w-xs
                                mx-auto
                                md:mx-0
                                mb-6
                            "
                        >
                            Have an interesting project, opportunity, or idea?
                            I'd love to hear from you.
                        </p>


                        {/* Social Buttons */}

                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                md:justify-start
                                gap-3
                            "
                        >

                            {socialLinks.map((social) => {

                                const Icon = social.icon;

                                return (

                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            w-11
                                            h-11
                                            rounded-full
                                            bg-white/5
                                            border
                                            border-white/10
                                            flex
                                            items-center
                                            justify-center
                                            text-white/70
                                            hover:text-purple-500
                                            hover:border-purple-500/50
                                            hover:bg-purple-500/10
                                            hover:-translate-y-1
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>

                                );

                            })}

                        </div>

                    </div>

                </div>


                {/* ================= DIVIDER ================= */}

                <div className="border-t border-white/10" />


                {/* ================= BOTTOM BAR ================= */}

                <div
                    className="
                        py-6
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    {/* Copyright */}

                    <p
                        className="
                            text-xs
                            text-white/40
                            text-center
                            md:text-left
                    "
                    >
                        © {currentYear} Sladjana Mandaric. All rights reserved.
                    </p>


                    {/* Made With */}

                    <p
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-white/40
                        "
                    >
                        Made with

                        <Heart
                            className="
                                w-3.5
                                h-3.5
                                text-purple-500
                                fill-current
                            "
                        />

                        and creativity.

                    </p>


                    {/* Back To Top */}

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="
                            w-9
                            h-9
                            rounded-full
                            bg-white/5
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white/60
                            hover:text-purple-500
                            hover:border-purple-500/50
                            hover:bg-purple-500/10
                            transition-all
                            duration-300
                        "
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>

                </div>

            </div>

        </footer>
    );
};

