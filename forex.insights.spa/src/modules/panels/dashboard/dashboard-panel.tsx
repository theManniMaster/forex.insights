import { Component } from "react";
import { Col, Row, Typography } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { ForexAlertGetResponse } from "../../../api";
import { DashboardItemCard, EmptyDashboard } from "./components";

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

        return <Row justify="center" align="middle" className={styles.container}>
            <Col span={24}>
                {
                    alerts.length === 0 ?
                        <EmptyDashboard />
                        :
                        <>
                            <Col>
                                <Text className={styles.header}>Active Alerts.</Text>
                            </Col>

                            {
                                alerts.map(alert => <DashboardItemCard key={alert.id} alert={alert} />)
                            }
                        </>
                }
            </Col>
        </Row>;
    }
}

export default DashboardPanel;