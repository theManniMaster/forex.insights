import { Component, createRef } from "react";
import styles from "./styles/login-signup.module.less";
import { Button, Col, Form, FormInstance, Input, Row, Typography } from "antd";
import { LoginSignupFormItem } from "./enum";
import Header from "./header";
import { apiClient } from "../../api";
import { WithRouting, withRouting } from "../higher-order-components";
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
 * Login component.
 */
class Login extends Component<Props, State> {
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
            .login({
                email: validation[LoginSignupFormItem.username],
                password: validation[LoginSignupFormItem.password]
            })
            .then(() => {
                navigate(Routes.dashboard);
            })
            .catch(() => {

            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { navigate } = this.props;
        const { loading } = this.state;

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
                                rules={[{ required: true, message: "Please enter your password." }]}
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
                            Login
                        </Button>
                    </Col>
                </Row>

                <Row justify="center" align="middle">
                    <Col span={24}>
                        <Text className={styles.noAccountText}>Don't have an account?</Text>
                    </Col>
                    <Col>
                        <Button
                            type="text"
                            onClick={() => navigate(Routes.register)}
                            disabled={loading}
                        >
                            Sign up.
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const ComponentWithRouting = withRouting(Login);

export default ComponentWithRouting;