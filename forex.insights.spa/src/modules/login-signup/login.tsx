import { Component } from "react";
import styles from "./styles/login.module.less";
import { Row, Typography } from "antd";

const { Text } = Typography;

/**
 * Login component.
 */
class Login extends Component {
    render() {
        return (
            <Row className={styles.container}>
                <div className={styles.innerContainer}>
                    <Row justify="center">
                        <Text className={styles.introHeader}>Forex Insights.</Text>
                    </Row>
                    <Row justify="center">
                        <Text className={styles.introDescription}>Forex Insights (FeIn) delivers real-time currency updates and instant alerts when your desired rates are met.</Text>
                    </Row>
                </div>
            </Row>
        );
    }
}

export default Login;