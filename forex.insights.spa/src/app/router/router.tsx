import { createBrowserRouter } from "react-router-dom";
import { DashboardPanel } from "../../modules";
import { ErrorPage } from "../components";
import { ConfigProvider } from "antd";
import { theme } from "../themes";

/**
 * React browser router for defining UI paths.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPanel />,
        errorElement: <ConfigProvider theme={theme}><ErrorPage /></ConfigProvider>,
    }
]);

export default router;