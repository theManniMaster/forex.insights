import { Component, createRef } from "react";
import { withRouting, WithRouting } from "../higher-order-components";
import Header from "./header";
import styles from "./styles/login-signup.module.less";
import { Button, Col, Form, FormInstance, Input, notification, Row, Typography } from "antd";
import { apiClient } from "../../api";
import { LoginSignupFormItem } from "./enum";
import { Routes } from "../../router";

const { Text } = Typography;
const { Item } = Form;

/**
 * Login component props.
 */
interface Props extends WithRouting { }

/**
 * Login component state.
 */
interface State {
    loading: boolean;
}

/**
 * Signup component.
 */
class Signup extends Component<Props, State> {
    formRef = createRef<FormInstance>();

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleFormValuesSubmit = async () => {
        const { navigate } = this.props;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        this.setState({ loading: true });

        apiClient.auth
            .register({
                email: validation[LoginSignupFormItem.username],
                password: validation[LoginSignupFormItem.password]
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "You have successfully registered. Please log in to continue."
                })

                navigate(Routes.login);
            })
            .catch(() => {

            })
            .finally(() => this.setState({ loading: false }));
    };

    validateConfirmPasswordField = (value: string) => {
        const fieldValue = this.formRef.current?.getFieldValue(LoginSignupFormItem.password);

        return value === fieldValue ? Promise.resolve() : Promise.reject();
    };

    render() {
        const { navigate } = this.props;
        const { loading } = this.state;

        return (
            <div className={styles.container}>

                <Header />

                <Row justify="center">

                    <Col span={24}>
                        <Text className={styles.header}>Enter your details to sign up.</Text>
                    </Col>

                    <Col span={24} className={styles.formContainer}>
                        <Form
                            ref={this.formRef}
                            layout="vertical"
                            onFinish={this.handleFormValuesSubmit}
                        >
                            <Item
                                name={LoginSignupFormItem.username}
                                label="Email"
                                rules={[{ required: true, message: "Please enter your email." }]}
                            >
                                <Input />
                            </Item>

                            <Item
                                name={LoginSignupFormItem.password}
                                label="Password"
                                rules={[{ required: true, message: "Please enter your password." }]}
                            >
                                <Input type="password" />
                            </Item>

                            <Item
                                name={LoginSignupFormItem.confirmPassword}
                                label="Confirm Password"
                                rules={[
                                    {
                                        required: true, message: "Please enter password again to confirm."
                                    },
                                    {
                                        validator: (_, value) => this.validateConfirmPasswordField(value),
                                        message: "Passwords do not match."
                                    }
                                ]}
                            >
                                <Input type="password" />
                            </Item>
                        </Form>
                    </Col>

                </Row>

                <Row justify="center">
                    <Col>
                        <Button
                            type="primary"
                            onClick={() => this.formRef.current?.submit()}
                            loading={loading}
                        >
                            Continue
                        </Button>
                    </Col>
                </Row>

                <Row justify="center" align="middle">
                    <Col span={24}>
                        <Text className={styles.noAccountText}>Already have an account?</Text>
                    </Col>
                    <Col>
                        <Button
                            type="text"
                            onClick={() => navigate(Routes.login)}
                        >
                            Log in.
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const ComponentWithRouting = withRouting(Signup);

export default ComponentWithRouting;