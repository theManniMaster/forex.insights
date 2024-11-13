import { Component } from "react";
import { Header } from "../headers";
import { Outlet } from "react-router-dom";
import { Row } from "antd";
import styles from "./styles/root-outlet.module.less";

/**
 * Root outlet component.
 */
class RootOutlet extends Component {
    render() {
        return <Row className={styles.container}>
            <Header />
            <Outlet />
        </Row>;
    }
}

export default RootOutlet;