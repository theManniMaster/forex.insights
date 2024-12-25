import { Component, createRef } from "react";
import styles from "./styles/login.module.less";
import { Button, Col, Form, FormInstance, Input, Row, Typography } from "antd";
import { LoginSignupFormItem } from "./enum";
import Header from "./header";

const { Text } = Typography;
const { Item } = Form;

/**
 * Login component.
 */
class Login extends Component {
    formRef = createRef<FormInstance>();

    handleFormValuesSubmit = () => {

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
                            >
                                <Input />
                            </Item>

                            <Item
                                name={LoginSignupFormItem.password}
                                label="Password"
                            >
                                <Input />
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
                        <Button type="primary" onClick={this.formRef.current?.submit}>Login</Button>
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

export default Login;