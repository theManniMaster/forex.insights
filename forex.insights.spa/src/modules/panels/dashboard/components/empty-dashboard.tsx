import { Component } from "react";
import { Button, Col, Row, Typography } from "antd";
import { PlusOutlined, RobotOutlined } from "@ant-design/icons";
import styles from "./styles/empty-dashboard.module.less";

const { Text } = Typography;

/**
 * Empty dashboard component.
 */
class EmptyDashboard extends Component {
    render() {
        return <Row justify="center">
            <Col span={24}>
                <RobotOutlined className={styles.emptyImage} />
            </Col>

            <Col span={24}>
                <Text className={styles.emptyListText}>Nothing here yet... What will you do to make it awesome?</Text>
            </Col>

            <Col>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                >
                    Add Alert
                </Button>
            </Col>
        </Row>;
    }
}

export default EmptyDashboard;