import { Component, createRef } from "react";
import { withRouting, WithRouting } from "../higher-order-components";
import Header from "./header";
import styles from "./styles/login-signup.module.less";
import { Button, Col, Form, FormInstance, Input, notification, Row, Typography } from "antd";
import { apiClient, ApiErrorResponse } from "../../api";
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

    componentDidMount = () => {
        window.addEventListener("keydown", this.handleKeyDown);
    };

    componentWillUnmount = () => {
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter")
            this.formRef.current?.submit();
    };

    handleFormValuesSubmit = async () => {
        const { navigate } = this.props;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        this.setState({ loading: true });

        apiClient.auth
            .register({
                email: validation[LoginSignupFormItem.username].trim(),
                password: validation[LoginSignupFormItem.password].trim()
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "You have successfully registered. Please log in to continue."
                });

                navigate(Routes.login);
            })
            .catch((error: ApiErrorResponse) => {
                let description = "Something went wrong. Please try again.";

                if (error.errors.length > 0)
                    description = error.errors.map(e => e).join(" | ");

                notification.error({
                    message: "Error",
                    description
                });
            })
            .finally(() => this.setState({ loading: false }));
    };

    validateConfirmPasswordFieldOnPasswordChange = () => {
        const confirmPasswordField = this.formRef.current?.getFieldValue(LoginSignupFormItem.confirmPassword);

        if (confirmPasswordField)
            this.formRef.current?.validateFields([LoginSignupFormItem.confirmPassword]);
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
                                rules={[
                                    { required: true, message: "Please enter your email." },
                                    { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format." }
                                ]}
                            >
                                <Input />
                            </Item>

                            <Item
                                name={LoginSignupFormItem.password}
                                label="Password"
                                rules={[
                                    { required: true, message: "Please enter your password." },
                                    { min: 6, message: "Password must be at least 6 characters long." },
                                    { pattern: /[A-Z]/, message: "Password must contain at least one uppercase letter." },
                                    { pattern: /[0-9]/, message: "Password must contain at least one number." },
                                    { pattern: /\W/, message: "Password must contain at least one special character." }
                                ]}
                            >
                                <Input type="password" onChange={() => this.validateConfirmPasswordFieldOnPasswordChange()} />
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
                            disabled={loading}
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