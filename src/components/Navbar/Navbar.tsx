import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "./navLinks";


const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const isLogedIn = localStorage.getItem("token")

    return (
        <header className="sticky top-0 z-50  bg-[#F1F1F0] backdrop-blur-lg border-b-2 border-gray-200">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-5 px-5 md:px-0">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-2xl font-medium text-slate-900"
                >
                    URBANZY
                </NavLink>
                <div className="flex items-center gap-24">
                    <div className="hidden items-center gap-12 md:flex">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[1.1rem] tracking-wider transition-all duration-300 ${isActive
                                        ? "text-black"
                                        : "text-slate-600 hover:text-black"
                                    }`
                                }
                            >
                                {link.label.toUpperCase()}
                            </NavLink>
                        ))}
                    </div>
                </div>
                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="space-y-4 border-t bg-white p-5">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `whitespace-nowrap block rounded-lg px-3 py-2 ${isActive
                                    ? "text-black"
                                    : "text-slate-600 hover:text-black"
                                }`
                            }
                        >
                            {link.label.toUpperCase()}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;