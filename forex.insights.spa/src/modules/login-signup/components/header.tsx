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
                        With Forex Insights
                        (<Link className={styles.link} to="https://www.youtube.com/watch?v=U-l4ya3ejko" target="_blank">FeIn</Link>), 
                        set your preferred exchange rate and receive notifications when your target is met.
                    </Text>
                </Row>
            </div>
        );
    }
}

export default Header;