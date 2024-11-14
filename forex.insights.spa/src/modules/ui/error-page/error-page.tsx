import { Component } from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./styles/error-page.module.less";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

/**
 * Fallback component for Non-Existent Routes.
 */
class ErrorPage extends Component {
    render() {
        return <Row justify="center" align="middle" className={styles.container}>
            <Col span={24}>
                <Text className={styles.header}>Oops!</Text>
                <Text className={styles.subheader}>We couldn't find the page you were looking for.</Text>
            </Col>

            <Col>
                <Link to="/">
                    <Button
                        type="primary"
                        className={styles.button}
                        icon={<ArrowLeftOutlined />}
                    >
                        Go Home
                    </Button>
                </Link>
            </Col>
        </Row>;
    }
}

export default ErrorPage;