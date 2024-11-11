import { Component } from "react";
import { Button, Row } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { ForexAlertGetResponse } from "../../../api";
import { DashboardItemCard, EmptyDashboard } from "./components";
import { PlusOutlined } from "@ant-design/icons";

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
            alerts: [
                {
                    id: "1",
                    contactMethod: 0,
                    frequency: 0,
                    fromCurrency: "USD",
                    toCurrency: "EUR",
                    minimumRate: 123409.99,
                },
                {
                    id: "2",
                    contactMethod: 1,
                    frequency: 1,
                    fromCurrency: "INR",
                    toCurrency: "CAD",
                    minimumRate: 40,
                },
                {
                    id: "3",
                    contactMethod: 0,
                    frequency: 2,
                    fromCurrency: "USD",
                    toCurrency: "EUR",
                    minimumRate: 40,
                },
                {
                    id: "4",
                    contactMethod: 1,
                    frequency: 0,
                    fromCurrency: "USD",
                    toCurrency: "EUR",
                    minimumRate: 40,
                }
            ]
        };
    }

    render() {
        const { alerts } = this.state;

        return <>
            {
                alerts.length === 0 ?
                    <Row justify="center" align="middle" className={styles.container}>
                        <EmptyDashboard />
                    </Row>
                    :
                    <div className={styles.container}>
                        <Row justify="center" className={styles.buttonContainer}>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                            >
                                Add Alert
                            </Button>
                        </Row>

                        <Row gutter={[40, 40]}>
                            {
                                alerts.map(alert => <DashboardItemCard key={alert.id} alert={alert} />)
                            }
                        </Row>
                    </div>
            }
        </>;
    }
}

export default DashboardPanel;