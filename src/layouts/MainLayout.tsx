import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-6">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;