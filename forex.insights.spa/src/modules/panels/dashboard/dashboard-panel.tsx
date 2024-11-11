import { Component } from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { ForexAlertGetResponse } from "../../../api";
import { DashboardItemCard, EmptyDashboard } from "./components";
import { PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

/**
 * Dashboard props.
 */
interface Props { }

/**
 * Dashboard state.
 */
interface State {
    alerts: ForexAlertGetResponse[];
}

/**
 * Dashboard panel component.
 */
class DashboardPanel extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            alerts: []
        };
    }

    render() {
        const { alerts } = this.state;

        return <>
            {
                alerts.length !== 0 ?
                    <Row justify="center" align="middle" className={styles.container}>
                        <EmptyDashboard />
                    </Row>
                    :
                    <Row justify="center" className={styles.container}>
                        <Col>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                            >
                                Add Alert
                            </Button>
                        </Col>

                        {
                            alerts.map(alert => <DashboardItemCard key={alert.id} alert={alert} />)
                        }
                    </Row>
            }
        </>;
    }
}

export default DashboardPanel;