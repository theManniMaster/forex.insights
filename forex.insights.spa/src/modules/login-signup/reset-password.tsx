import { Component, createRef } from "react";
import styles from "./styles/login-signup.module.less";
import { Header } from "./components";
import { Button, Col, Form, FormInstance, Input, Row, Typography } from "antd";
import { LoginSignupFormItem } from "./enum";
import { apiClient } from "../../api";

const { Text } = Typography;
const { Item } = Form;

/**
 * Reset password component props.
 */
interface Props { }

/**
 * Reset password component state.
 */
interface State {
    passwordInputVisible: boolean;
}

/**
 * Forgot password panel.
 */
class ResetPassword extends Component<Props, State> {
    formRef = createRef<FormInstance>();

    constructor(props: Props) {
        super(props);

        this.state = {
            passwordInputVisible: false,
        };
    }

    handleFormValuesSubmit = async () => {
        const { passwordInputVisible } = this.state;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        if (!passwordInputVisible) {
            apiClient.auth
                .forgotPassword({
                    email: validation[LoginSignupFormItem.username].trim()
                })
                .then(() => {
                    this.setState({ passwordInputVisible: true });
                });
        }
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
        const { passwordInputVisible } = this.state;

        return (<div className={styles.container}>
            <Header />

            <Row justify="center">

                <Col span={24}>
                    <Text className={styles.header}>Enter the email address you used to register with.</Text>
                </Col>

                <Col span={24}>
                    <Form
                        ref={this.formRef}
                        className={styles.formContainer}
                        layout="vertical"
                        onFinish={this.handleFormValuesSubmit}
                    >
                        {
                            !passwordInputVisible && 
                                <Item
                                    name={LoginSignupFormItem.username}
                                    rules={[
                                        { required: true, message: "Please enter your email." },
                                        { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format." }
                                    ]}
                                >
                                    <Input placeholder={"username@example.com"} />
                                </Item>
                        }
                        {
                            passwordInputVisible && 
                                <>
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
                                </>
                        }
                    </Form>
                </Col>

                <Col>
                    <Button
                        type="primary"
                        onClick={() => this.formRef.current?.submit()}
                    >
                        {passwordInputVisible ? "Reset Password" : "Continue"}
                    </Button>
                </Col>
            </Row>
        </div>);
    }
}

export default ResetPassword;