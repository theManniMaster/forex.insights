import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "./themes";
import { router } from "../router";
import { token } from "../api";

/**
 * App props.
 */
interface Props { }

/**
 * Main application component.
 */
class App extends Component<Props> {
    constructor(props: Props) {
        super(props);

        const storageObject = localStorage.getItem(token.key);
        token.parse(storageObject);
    }

    render() {
        return <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
        </ConfigProvider>;
    }
}

export default App;