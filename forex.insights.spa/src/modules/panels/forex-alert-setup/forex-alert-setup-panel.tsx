import { Component, createRef } from "react";
import { Button, Col, Form, FormInstance, Input, Radio, Row, Typography } from "antd";
import styles from "./styles/forex-alert-setup-panel.module.less";
import { AlertItem, ContactMethod, NotificationFrequency } from "./enums";
import { CurrencyPairSelector } from "./components";

const { Text } = Typography;
const { Item } = Form;

/**
 * Panel for setting up forex alerts.
 */
class ForexAlertSetupPanel extends Component {
    formRef = createRef<FormInstance>();

    handleFormValuesSubmit = () => {
        const validation = this.formRef.current?.validateFields();

        if (!validation)
            return;

        console.log(validation);
    };

    render() {
        return (
            <Row justify="center" className={styles.container}>
                <Col>
                    <Text className={styles.header}>Setup Alert.</Text>
                </Col>

                <Col span={24}>
                    <Form
                        ref={this.formRef}
                        onFinish={this.handleFormValuesSubmit}
                    >
                        <Row className={styles.itemContainer}>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Notify me:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.frequency}
                                    rules={[{ required: true, message: "Please select a frequency." }]}
                                >
                                    <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                    >
                                        <Radio value={NotificationFrequency.once}>Once</Radio>
                                        <Radio value={NotificationFrequency.daily}>Daily</Radio>
                                        <Radio value={NotificationFrequency.weekly}>Weekly</Radio>
                                    </Radio.Group>
                                </Item>
                            </Col>
                        </Row>

                        <Row className={styles.itemContainer}>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>When:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <CurrencyPairSelector />
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Reaches a minimum of:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.minimumRate}
                                    rules={[{ required: true, message: "Please select a minimum rate." }]}
                                >
                                    <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        suffix="$"
                                    />
                                </Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24} md={8}>
                                <Text className={styles.label}>Through:</Text>
                            </Col>

                            <Col span={24} md={16}>
                                <Item
                                    name={AlertItem.contactMethod}
                                    rules={[{ required: true, message: "Please select a contact method." }]}
                                >
                                    <Radio.Group
                                        optionType="button"
                                        buttonStyle="solid"
                                    >
                                        <Radio value={ContactMethod.email}>Email</Radio>
                                        <Radio value={ContactMethod.sms}>SMS</Radio>
                                    </Radio.Group>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>

                <Col>
                    <Button
                        className={styles.button}
                        type="primary"
                        onClick={() => this.formRef.current?.submit()}
                    >
                        Create
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default ForexAlertSetupPanel;