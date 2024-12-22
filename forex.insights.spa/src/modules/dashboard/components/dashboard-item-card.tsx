import { Component } from "react";
import { apiClient, ContactMethod, ForexAlertGetResponse, NotificationFrequency } from "../../../api";
import { Card, Col, notification, Row, Tag, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./styles/dashboard-item-card.module.less";
import { countries } from "../../forex-alert-setup";

const { Text } = Typography;

/**
 * Dashboard item card props.
 */
interface Props {
    alert: ForexAlertGetResponse;
    reloadAlerts: () => void;
}

/**
 * Dashboard item card.
 */
class DashboardItemCard extends Component<Props> {

    getAlertFrequencyLabel = () => {
        const { alert } = this.props;

        switch (alert.frequency) {
            case NotificationFrequency.once:
                return "Once";
            case NotificationFrequency.daily:
                return "Daily";
            case NotificationFrequency.weekly:
                return "Weekly";
            default:
                return "";
        };
    };

    getContactMethodLabel = () => {
        const { alert } = this.props;

        switch (alert.contactMethod) {
            case ContactMethod.email:
                return "Email";
            case ContactMethod.sms:
                return "SMS";
            default:
                return "";
        };
    };

    handleEdit = () => {
        //const { alert } = this.props;

        
    };

    handleDelete = () => {
        const { alert, reloadAlerts } = this.props;

        apiClient.forexAlert
            .delete({
                id: alert.id
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "Alert deleted successfully."
                });

                reloadAlerts();
            })
            .catch(() => {
                notification.error({
                    message: "Error",
                    description: "Couldn't delete. Please try again."
                });
            });
    };

    render() {
        const { alert } = this.props;
        const numberFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: alert.toCurrency,
        });

        return <Col span={24} md={12}>
            <Card
                className={styles.card}
                actions={[
                    <EditOutlined onClick={this.handleEdit} />,
                    <DeleteOutlined onClick={this.handleDelete} />,
                ]}
            >
                <Row justify="center" align="middle">
                    <Col span={24} md={10}>
                        <img
                            className={styles.flag}
                            src={countries.find(country => country.currency === alert.fromCurrency)?.flag}
                            alt={alert.fromCurrency}
                        />
                    </Col>
                    <Col md={4}>
                        <Text className={styles.flagDivider}>to</Text>
                    </Col>
                    <Col span={24} md={10}>
                        <img
                            className={styles.flag}
                            src={countries.find(country => country.currency === alert.toCurrency)?.flag}
                            alt={alert.toCurrency}
                        />
                    </Col>
                </Row>

                <Row className={styles.dataContainer}>
                    <Col span={16}>
                        <Row className={styles.label}>Minimum Amount:</Row>
                        <Row className={styles.label}>Frequency:</Row>
                        <Row className={styles.label}>Contact Method:</Row>
                        <Row className={styles.label}>Status:</Row>
                    </Col>
                    <Col span={8}>
                        <Row className={styles.labelValue}>{numberFormatter.format(alert.minimumRate)}</Row>
                        <Row className={styles.labelValue}>{this.getAlertFrequencyLabel()}</Row>
                        <Row className={styles.labelValue}>{this.getContactMethodLabel()}</Row>
                        <Row className={styles.labelValue}>
                            {
                                alert.nextAlertTime ?
                                    <Tag color="success" bordered={false} className={styles.tag}>Completed</Tag>
                                    :
                                    <Tag color="blue" bordered={false} className={styles.tag}>Active</Tag>
                            }
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Col>;
    }
}

export default DashboardItemCard;