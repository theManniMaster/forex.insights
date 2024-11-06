import { Component } from "react";
import { Col, Form, Input, Radio, Row, Typography } from "antd";
import styles from "./styles/forex-alert-setup-panel.module.less";
import { AlertItem, ContactMethod, NotificationFrequency } from "./enums";

const { Text } = Typography;
const { Item } = Form;

/**
 * Panel for setting up forex alerts.
 */
class ForexAlertSetupPanel extends Component {
    render() {
        return (
            <Row justify="center">
                <Col span={24}>
                    <Text className={styles.header}>Setup Alert.</Text>
                </Col>

                <Col span={24}>
                    <Form>
                        <Row className={styles.itemContainer}>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Notify me:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.frequency}
                                >
                                    <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                        defaultValue={NotificationFrequency.once}
                                    >
                                        <Radio value={NotificationFrequency.once}>Once</Radio>
                                        <Radio value={NotificationFrequency.daily}>Daily</Radio>
                                        <Radio value={NotificationFrequency.weekly}>Weekly</Radio>
                                    </Radio.Group>
                                </Item>
                            </Col>
                        </Row>

                        <Row gutter={40}>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Reaches a minimum of:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.minimumRate}
                                >
                                    <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        suffix="$"
                                    />
                                </Item>
                            </Col>
                        </Row>

                        <Row gutter={40}>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Through:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.contactMethod}
                                >
                                    <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                        defaultValue={ContactMethod.email}
                                    >
                                        <Radio value={ContactMethod.email}>Email</Radio>
                                        <Radio value={ContactMethod.sms}>SMS</Radio>
                                    </Radio.Group>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        );
    }
}

export default ForexAlertSetupPanel;