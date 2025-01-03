import { Button, Col, Form, FormInstance, Input, Row } from "antd";
import { Component, createRef } from "react";
import { FeedbackFormItem } from "./enums";
import styles from "./styles/feedback-input-form.module.less";

const { Item } = Form;
const { TextArea } = Input;

/**
 * Feedback input form props.
 */
interface Props {
    onSubmit: () => void;
}

/**
 * Feedback input form state.
 */
interface State {
    loading: boolean;
}

/**
 * Feedback input form component.
 */
class FeedbackInputForm extends Component<Props, State> {
    formRef = createRef<FormInstance>();

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    handleFormSubmit = async () => {
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        this.setState({ loading: true });

        // submit feedback.
    };

    render() {
        const { loading } = this.state;

        return (
            <Form
                ref={this.formRef}
                className={styles.container}
                onFinish={this.handleFormSubmit}
                layout="vertical"
                disabled={loading}
            >
                <Row gutter={12} justify="center">
                    <Col span={24} sm={12}>
                        <Item
                            name={FeedbackFormItem.firstname}
                            label="First Name"
                            rules={[
                                { required: true, message: "Please enter your first name." }
                            ]}
                        >
                            <Input />
                        </Item>
                    </Col>

                    <Col span={24} sm={12}>
                        <Item
                            name={FeedbackFormItem.lastname}
                            label="Last Name"
                            rules={[
                                { required: true, message: "Please enter your last name." }
                            ]}
                        >
                            <Input />
                        </Item>
                    </Col>

                    <Col span={24}>
                        <Item
                            name={FeedbackFormItem.feedback}
                            label="Feedback"
                            rules={[
                                { required: true, message: "Please enter your feedback." }
                            ]}
                        >
                            <TextArea
                                showCount
                                autoSize={{ minRows: 3 }}
                                maxLength={250} />
                        </Item>
                    </Col>

                    <Button
                        type="primary"
                        onClick={() => this.formRef.current?.submit()}
                        loading={loading}
                    >
                        Submit
                    </Button>
                </Row>
            </Form>
        );
    }
}

export default FeedbackInputForm;