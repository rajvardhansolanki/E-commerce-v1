import type { JSX, LazyExoticComponent, ReactNode } from "react";

export interface AppRoute {
    path: string;
    element: LazyExoticComponent<() => JSX.Element>;
    layout?: ReactNode;
    isProtected?: boolean;
}