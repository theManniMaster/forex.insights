import { createBrowserRouter, Navigate } from "react-router-dom";
import { AddAlertPanel, DashboardPanel, EditAlertPanel, Login, Signup } from "../modules";
import { RouteParams, Routes } from ".";
import { ProtectedRoute } from "./protected-route";
import { ErrorPage } from "./error-page";

/**
 * React browser router for defining UI paths.
 */
const router = createBrowserRouter([
    {
        path: Routes.root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={Routes.dashboard} replace />,
            },
            {
                path: Routes.login,
                element: <Login />
            },
            {
                path: Routes.register,
                element: <Signup />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: Routes.dashboard,
                        element: <DashboardPanel />,
                    },
                    {
                        path: Routes.create,
                        element: <AddAlertPanel />
                    },
                    {
                        path: `${Routes.edit}/:${RouteParams.id}`,
                        element: <EditAlertPanel />
                    }
                ]
            }
        ]
    }
]);

export default router;