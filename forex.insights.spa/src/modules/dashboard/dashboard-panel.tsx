import { Component } from "react";
import { Button, Row, Spin, Typography } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { apiClient, ForexAlertGetResponse } from "../../api";
import { DashboardItemCard, EmptyDashboard } from "./components";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Routes } from "../../router";
import dayjs from "dayjs";

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

    getGreeting = () => {
        const hour = dayjs().hour();

        if (hour >= 5 && hour < 12)
            return "Good morning!";
        else if (hour >= 12 && hour < 18)
            return "Good afternoon!";

        return "Good evening!";
    }

    render() {
        const { alerts, loading } = this.state;

        return <>
            <div className={styles.greetingContainer}>
                <Row justify="center">
                    <Text className={styles.greetingText}>{this.getGreeting()}</Text>
                </Row>
                <Row justify="center">
                    <Text className={styles.greetingDescription}>Explore your alerts using this dashboard.</Text>
                </Row>
            </div>
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