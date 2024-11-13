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
            alerts: []
        };
    }

    render() {
        const { alerts } = this.state;

        return <>
            {
                alerts.length === 0 ?
                    <Row justify="center" align="middle" className={styles.emptyDataContainer}>
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