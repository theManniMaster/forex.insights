import { Component } from "react";
import { ConfigProvider, Row } from "antd";
import { theme } from "./themes";
import styles from "./styles/app.module.less";
import { Header } from "./components";
import { DashboardPanel } from "../modules";

/**
 * Main application component.
 */
class App extends Component {
    render() {
        return <ConfigProvider theme={theme}>
            <Row className={styles.container}>
                <Header />
                <DashboardPanel />
            </Row>
        </ConfigProvider>;
    }
}

export default App;