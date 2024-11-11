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
            <div className={styles.container}>
                <Row justify="center">
                    <Text className={styles.introHeader}>Forex Insights.</Text>
                </Row>
                <Row justify="center">
                    <Text className={styles.introDescription}>Forex Insights (FeIn) delivers real-time currency updates and instant alerts when your desired rates are met.</Text>
                </Row>
            </div>
        );
    }
}

export default Header;