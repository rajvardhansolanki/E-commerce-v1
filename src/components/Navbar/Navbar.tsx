import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { navLinks } from "./navLinks";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-slate-900"
                >
                    <ShoppingCart size={28} />
                    ShopVerse
                </NavLink>

                {/* Desktop Menu */}
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

                {/* CTA */}
                <div className="hidden md:block">
                    <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                        Login
                    </button>
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

                    <button className="w-full rounded-lg bg-blue-600 py-2 text-white">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;