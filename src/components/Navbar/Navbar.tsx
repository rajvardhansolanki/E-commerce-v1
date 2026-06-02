import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const isLogedIn = localStorage.getItem("token")

    return (
        <header className="sticky top-0 z-50  bg-[#F1F1F0] backdrop-blur-lg border-b-2 border-gray-200">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-5">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-2xl font-medium text-slate-900"
                >
                    Urbanzy
                </NavLink>
                <div className="flex gap-3">
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `font-medium transition-all duration-300 ${isActive
                                        ? "text-blue-600"
                                        : "text-slate-600 hover:text-blue-600"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {!isLogedIn && <div className="hidden md:block">
                        <button className="cursor-pointer rounded bg-white px-5 py-0.5 text-black border-2 border-amber-300 transition-all duration-900 ease-in-out hover:bg-amber-300"
                            onClick={() => navigate("/login")}>
                            Login
                        </button>
                    </div>}
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
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `block rounded-lg px-3 py-2 ${isActive
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-slate-700"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {!isLogedIn && <div className="">
                        <button className="cursor-pointer rounded bg-white px-5 py-0.5 text-black border-2 border-amber-300 transition-all duration-900 ease-in-out hover:bg-amber-300"
                            onClick={() => navigate("/login")}>
                            Login
                        </button>
                    </div>}
                </div>
            </div>
        </header>
    );
};

export default Navbar;