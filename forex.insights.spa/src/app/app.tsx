import { Component } from "react";
import { ConfigProvider, Row } from "antd";
import { theme } from "./themes";
import { DashboardPanel, Header } from "../modules";
import styles from "./styles/app.module.less";

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