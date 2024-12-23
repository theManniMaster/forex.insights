import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "../modules/ui";
import { DashboardPanel, ForexAlertSetupPanel } from "../modules";
import { RouteParams, Routes } from ".";
import { RootOutlet } from "./root-outlet";

/**
 * React browser router for defining UI paths.
 */
const router = createBrowserRouter([
    {
        path: Routes.root,
        element: <RootOutlet />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={Routes.dashboard} replace />, // TODO: update this to include login page as well.
            },
            {
                path: Routes.dashboard,
                element: <DashboardPanel />,
            },
            {
                path: Routes.create,
                element: <ForexAlertSetupPanel />
            },
            {
                path: `${Routes.edit}/:${RouteParams.id}`,
                element: <ForexAlertSetupPanel />
            }
        ]
    }
]);

export default router;