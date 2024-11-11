import { Component } from "react";
import { Col, Row, Table, Typography } from "antd";
import styles from "./styles/dashboard-panel.module.less";
import { ContactMethod, ForexAlertGetResponse, NotificationFrequency } from "../../../api";
import { ColumnsType } from "antd/es/table";

const { Text } = Typography;

/**
 * Dashboard panel component.
 */
class DashboardPanel extends Component {
    columns: ColumnsType<ForexAlertGetResponse> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: () => <Text>Name</Text>
        },
        {
            title: "Frequency",
            dataIndex: "frequency",
            key: "frequency",
            render: (frequency: NotificationFrequency) => <Text>{NotificationFrequency[frequency]}</Text>
        },
        {
            title: "From Currency",
            dataIndex: "fromCurrency",
            key: "fromCurrency",
        },
        {
            title: "To Currency",
            dataIndex: "toCurrency",
            key: "toCurrency",
        },
        {
            title: "Minimum Rate",
            dataIndex: "minimumRate",
            key: "minimumRate",
        },
        {
            title: "Contact Method",
            dataIndex: "contactMethod",
            key: "contactMethod",
            render: (contactMethod: ContactMethod) => <Text>{ContactMethod[contactMethod]}</Text>
        },
        {
            title: "Next Alert",
            dataIndex: "nextAlertTime",
            key: "nextAlertTime",
        }
    ];

    render() {
        return <Row justify="center" className={styles.container}>
            <Col>
                <Text className={styles.header}>Active Alerts.</Text>
            </Col>

            <Col span={24}>
                <Table<ForexAlertGetResponse>
                    columns={this.columns}
                />
            </Col>
        </Row>;
    }
}

export default DashboardPanel;