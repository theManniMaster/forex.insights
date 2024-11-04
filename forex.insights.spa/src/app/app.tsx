import { Component } from "react";
import { ConfigProvider } from "antd";
import { theme } from "./themes";

/**
 * Main application component.
 */
class App extends Component {
    render() {
        return <ConfigProvider theme={theme}>
            <>Hello World!</>
        </ConfigProvider>;
    }
}

export default App;