import { Component } from "react";
import { Button, Row, Spin } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { apiClient, ForexAlertGetResponse } from "../../api";
import { DashboardItemCard, EmptyDashboard } from "./components";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Routes } from "../../router";

/**
 * Dashboard props.
 */
interface Props { }

/**
 * Dashboard state.
 */
interface State {
    alerts: ForexAlertGetResponse[];
    loading: boolean;
}

/**
 * Dashboard panel component.
 */
class DashboardPanel extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            alerts: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.loadAlerts();
    }

    loadAlerts = () => {
        apiClient.forexAlert
            .search({})
            .then(response => {
                this.setState({ alerts: response.forexAlerts, loading: false });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    };

    render() {
        const { alerts, loading } = this.state;

        return <>
            {
                loading && <Spin className={styles.spin} />
            }
            {
                !loading && <>
                    {
                        alerts.length === 0 ?
                            <Row justify="center" align="middle" className={styles.emptyDataContainer}>
                                <EmptyDashboard />
                            </Row>
                            :
                            <div className={styles.container}>
                                <Row justify="center" className={styles.buttonContainer}>
                                    <Link to={Routes.create}>
                                        <Button
                                            type="primary"
                                            icon={<PlusOutlined />}
                                        >
                                            Add Alert
                                        </Button>
                                    </Link>
                                </Row>

                                <Row gutter={[40, 40]}>
                                    {
                                        alerts.map(alert => <DashboardItemCard key={alert.id} alert={alert} reloadAlerts={this.loadAlerts} />)
                                    }
                                </Row>
                            </div>
                    }
                </>
            }
        </>;
    }
}

export default DashboardPanel;