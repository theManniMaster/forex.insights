import { Component } from "react";
import { Row, Typography } from "antd";
import styles from "./styles/header.module.less";
import { Link } from "react-router-dom";

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
                    <Text className={styles.introDescription}>
                        Forex Insights
                        (<Link className={styles.link} to="https://www.youtube.com/watch?v=U-l4ya3ejko" target="_blank">FeIn</Link>)
                        delivers real-time currency updates and instant alerts when your desired rates are met.
                    </Text>
                </Row>
            </div>
        );
    }
}

export default Header;