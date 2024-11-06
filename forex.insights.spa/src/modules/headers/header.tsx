import { Component } from "react";
import { Row, Typography } from "antd";
import styles from "./styles/header-styles.module.less";

const { Text } = Typography;

/**
 * Header component.
 */
class Header extends Component {
    render() {
        return (
            <Row justify="center" className={styles.container}>
                <Text className={styles.introHeader}>Forex Insights.</Text>
                <Text className={styles.introDescription}>Forex Insights (FeIn) delivers real-time currency updates and instant alerts when your desired rates are met.</Text>
            </Row>
        );
    }
}

export default Header;