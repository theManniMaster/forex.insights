import { Component } from "react";
import { Button, Col, Typography } from "antd";
import { PlusOutlined, RobotOutlined } from "@ant-design/icons";
import styles from "./styles/empty-dashboard.module.less";
import { Routes } from "../../../router";
import { Link } from "react-router-dom";

const { Text } = Typography;

/**
 * Empty dashboard component.
 */
class EmptyDashboard extends Component {
    render() {
        return <>
            <Col span={24}>
                <RobotOutlined className={styles.emptyImage} />
            </Col>

            <Col span={24}>
                <Text className={styles.emptyListText}>Nothing here yet... What will you do to make it awesome?</Text>
            </Col>

            <Col>
                <Link to={Routes.create}>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                    >
                        Add Alert
                    </Button>
                </Link>
            </Col>
        </>;
    }
}

export default EmptyDashboard;