import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import {
    publicRoutes,
    protectedRoutes,
    commonRoutes,
} from "./routeConfig";

const Loader = () => <h2>Loading...</h2>;

// Reusable function for all routes
const renderRoutes = (routes: any[]) =>
    routes.map((route) => ({
        path: route.path,
        element: (
            <Suspense fallback={<Loader />}>
                <route.element />
            </Suspense>
        ),
    }));

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            // Public Routes
            ...renderRoutes(publicRoutes),

            // Protected Routes
            {
                element: <ProtectedRoute />,
                children: renderRoutes(protectedRoutes),
            },

            // Common Routes
            ...renderRoutes(commonRoutes),
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;