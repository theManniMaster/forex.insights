import { createBrowserRouter } from "react-router-dom";
import { DashboardPanel } from "../../modules";
import { ErrorPage } from "../components";

/**
 * React browser router for defining UI paths.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPanel />,
        errorElement: <ErrorPage />,
    }
]);

export default router;