import { lazy } from "react";
import type { AppRoute } from "./types";

const Home = lazy(() => import("../pages/Home/Home"));
const SHOPE = lazy(() => import("../pages/Shops/Shops"));
const CATEGORIES = lazy(() => import("../pages/Categories/Categories"));
const NEWARRIVALS = lazy(() => import("../pages/NewArraivals/Login"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const DEALS = lazy(() => import("../pages/Deals/Deals"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const publicRoutes: AppRoute[] = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/shops",
        element: SHOPE,
    },
    {
        path: "/categories",
        element: CATEGORIES,
    },
    {
        path: "/new-arraivals",
        element: NEWARRIVALS,
    },
    {
        path: "/deals",
        element: DEALS,
    }
];

export const protectedRoutes: AppRoute[] = [
    {
        path: "/cart",
        element: Cart,
        isProtected: true,
    },
    {
        path: "/wishlist",
        element: Cart,
        isProtected: true,
    }
];

export const commonRoutes: AppRoute[] = [
    {
        path: "*",
        element: NotFound,
    },
];