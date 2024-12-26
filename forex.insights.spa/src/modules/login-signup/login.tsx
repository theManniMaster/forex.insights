import { Component, createRef } from "react";
import styles from "./styles/login.module.less";
import { Button, Col, Form, FormInstance, Input, Row, Typography } from "antd";
import { LoginSignupFormItem } from "./enum";
import Header from "./header";
import { apiClient, token } from "../../api";
import { WithRouting, withRouting } from "../higher-order-components";
import { Routes } from "../../router";

const { Text } = Typography;
const { Item } = Form;

/**
 * Login component props.
 */
interface Props extends WithRouting { }

/**
 * Login component.
 */
class Login extends Component<Props> {
    formRef = createRef<FormInstance>();

    handleFormValuesSubmit = async () => {
        const { navigate } = this.props;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        apiClient.auth
            .login({
                email: validation[LoginSignupFormItem.username],
                password: validation[LoginSignupFormItem.password]
            })
            .then((response) => {
                token.setToken(response);                
                localStorage.setItem(token.key, token.getStringified());

                navigate(Routes.dashboard);
            })
            .catch(() => {
                token.clear();
                localStorage.removeItem(token.key);
            });
    };

    render() {
        return (
            <div className={styles.container}>

                <Header />

                <Row justify="center">

                    <Col span={24}>
                        <Text className={styles.header}>Enter your details to log in.</Text>
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
                        </Form>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Button type="link" className={styles.forgotPassword}>Forgot password?</Button>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col>
                        <Button type="primary" onClick={() => this.formRef.current?.submit()}>Login</Button>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col>
                        <Text>Don't have an account? <Button type="text">Sign up.</Button></Text>
                    </Col>
                </Row>
            </div>
        );
    }
}

const ComponentWithRouting = withRouting(Login);

export default ComponentWithRouting;