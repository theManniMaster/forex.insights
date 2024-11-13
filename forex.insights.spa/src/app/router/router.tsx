import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage, RootOutlet } from "../components";
import { DashboardPanel } from "../../modules";

/**
 * React browser router for defining UI paths.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootOutlet />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <DashboardPanel />,
            }
        ]
    }
]);

export default router;