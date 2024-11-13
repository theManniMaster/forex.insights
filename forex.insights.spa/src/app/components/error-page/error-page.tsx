import { Component } from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./styles/error-page.module.less";
import { ArrowLeftOutlined, FrownOutlined } from "@ant-design/icons";

const { Text } = Typography;

/**
 * Fallback component for Non-Existent Routes.
 */
class ErrorPage extends Component {
    render() {
        return <Row align="middle" className={styles.container}>
            <Col span={24}>
                <FrownOutlined className={styles.emptyImage} />
            </Col>

            <Col span={24}>
                <Row justify="center">
                    <Col span={24}>
                        <Text className={styles.header}>Oops!</Text>
                        <Text className={styles.subheader}>We couldn't find the page you were looking for.</Text>
                    </Col>

                    <Col>
                        <Button
                            type="primary"
                            className={styles.button}
                            icon={<ArrowLeftOutlined />}
                        >
                            Go Home
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>;
    }
}

export default ErrorPage;