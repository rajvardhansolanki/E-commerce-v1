import { lazy } from "react";
import type { AppRoute } from "./types";

const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const publicRoutes: AppRoute[] = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/products",
        element: Products,
    },
    {
        path: "/register",
        element: Register,
    },
    {
        path: "/login",
        element: Login,
    }
];

export const protectedRoutes: AppRoute[] = [
    {
        path: "/cart",
        element: Cart,
        isProtected: true,
    },
];

export const commonRoutes: AppRoute[] = [
    {
        path: "*",
        element: NotFound,
    },
];