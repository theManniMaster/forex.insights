import { Button, Col, Typography } from "antd";
import { Component } from "react";
import styles from "./styles/feedback-submitted-panel.module.less";
import { Link } from "react-router-dom";

const { Text } = Typography;

/**
 * Feedback submitted panel component.
 */
class FeedbackSubmittedPanel extends Component {
    render() {
        return (
            <>
                <Col span={24} className={styles.textContainer}>
                    <Text>
                        Thank you for your feedback! We'll review it and get back to you if needed.
                    </Text>
                </Col>

                <Col>
                    <Link to="/">
                        <Button
                            type="primary"
                            className={styles.button}
                        >
                            Return Home
                        </Button>
                    </Link>
                </Col>
            </>
        );
    }
}

export default FeedbackSubmittedPanel;