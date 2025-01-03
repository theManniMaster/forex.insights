import { Col, Row, Typography } from "antd";
import { Component } from "react";
import styles from "./styles/feedback-page.module.less";
import { FeedbackInputForm, FeedbackSubmittedPanel } from "./components";

const { Text } = Typography;

/**
 * Feedback page component props.
 */
interface Props { }

/**
 * Feedback page component state.
 */
interface State {
    feedbackSubmitted: boolean;
}

/**
 * Feedback page component.
 */
class FeedbackPage extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            feedbackSubmitted: false,
        };
    }

    render() {
        const { feedbackSubmitted } = this.state;

        return (
            <Row justify="center" className={styles.container}>
            
                <Col span={24}>
                    <Text className={styles.header}>We'd Love to Hear From You!</Text>
                    <Text className={styles.subheader}>
                        If you have any suggestions, feature requests, or if you've encountered any issues, please let us know.
                    </Text>
                </Col>

                {
                    feedbackSubmitted ?
                        <FeedbackSubmittedPanel />
                        :
                        <FeedbackInputForm onSubmit={() => this.setState({ feedbackSubmitted: true })} />
                }
            </Row>
        );
    }
}

export default FeedbackPage;