import { Button, Col, Row, Typography } from "antd";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/feedback-page.module.less";

const { Text } = Typography;

/**
 * Feedback page component.
 */
class FeedbackPage extends Component {
    render() {
        return (<Row justify="center" align="middle" className={styles.container}>
            <Col span={24}>
                <Text className={styles.header}>Feedback!</Text>
                <Text className={styles.subheader}>We couldn't find the page you were looking for.</Text>
            </Col>

            <Col>
                <Link to="/">
                    <Button
                        type="primary"
                        className={styles.button}
                    >
                        Go Home
                    </Button>
                </Link>
            </Col>
        </Row>);
    }
}

export default FeedbackPage;