import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const Navlinks = [
    { href: "about", title: "About" },
    { href: "experience", title: "Experience" },
    { href: "projects", title: "Projects" },
    { href: "skills", title: "Skills" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSectionClick = (section) => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate(`/#${section}`);
            return;
        }

        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleContactClick = () => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/#contact");
            return;
        }

        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-strong py-3"
                    : "bg-transparent py-5"
            }`}
        >
            {/* LEFT SIDE - LOGO */}
            <nav className="container mx-auto px-6 flex items-center justify-between">

                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight hover:text-lilac"
                >
                    SM<span className="text-primary">.</span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">

                        {Navlinks.map((link) => (
                            <button
                                type="button"
                                onClick={() => handleSectionClick(link.href)}
                                key={link.href}
                                className="px-4 py-2 text-base font-semibold text-muted hover:text-lilac rounded-full hover:bg-primary/10 transition-colors"
                            >
                                {link.title}
                            </button>
                        ))}

                    </div>
                </div>

                {/* CONTACT BUTTON */}
                <div className="hidden md:block">
                    <Button
                        size="sm"
                        onClick={handleContactClick}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">

                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

                        {Navlinks.map((link) => (
                            <button
                                type="button"
                                onClick={() => handleSectionClick(link.href)}
                                key={link.href}
                                className="text-lg font-semibold text-muted hover:text-foreground py-2 transition-colors text-left"
                            >
                                {link.title}
                            </button>
                        ))}

                        <Button onClick={handleContactClick}>
                            Contact Me
                        </Button>

                    </div>

                </div>
            )}

        </header>
    );
};
