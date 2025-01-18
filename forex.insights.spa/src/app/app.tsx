import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "./themes";
import { router, Routes } from "../router";

import "./configs";

/**
 * Main application component.
 */
class App extends Component {

    componentDidMount = () => {
        /**
         * Developer Note:
         * 
         * This code is a workaround for an issue with GitHub Pages and not directly related to the application.
         * 
         * The application is hosted on GitHub Pages at the URL `url/forex.insights/`, and pages like `url/forex.insights/login` are accessed by navigation.
         * When a user refreshes a page, GitHub Pages tries to reload the page at the same URL (e.g., `url/forex.insights/login`), but since GitHub Pages only
         * serves static content from the root URL, it results in a 404 error.
         * 
         * This code detects when the page is reloaded and redirects the user back to the root URL to prevent the 404 error. And react router handles the rest.
         */

        const navigationEntries = window.performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];

        if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
            window.location.replace(Routes.root);
        }
    }

    render() {
        return <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
        </ConfigProvider>;
    }
}

export default App;