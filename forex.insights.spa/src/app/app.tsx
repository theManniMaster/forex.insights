import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";
import { theme } from "./themes";

/**
 * Main application component.
 */
class App extends Component {
    render() {
        return <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
        </ConfigProvider>;
    }
}

export default App;