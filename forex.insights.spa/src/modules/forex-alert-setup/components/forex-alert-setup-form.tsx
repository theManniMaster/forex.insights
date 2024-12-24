import { Component, createRef } from "react";
import { ContactMethod, ForexAlertGetResponse, NotificationFrequency } from "../../../api";
import { Button, Col, Form, FormInstance, Input, Radio, Row, Typography } from "antd";
import CurrencyPairSelector from "./currency-pair-selector";
import { AlertItem } from "../enums";
import styles from "./styles/forex-alert-setup-form.module.less";

const { Text } = Typography;
const { Item } = Form;

/**
 * Props for the forex alert setup form.
 */
interface Props {
    alert?: ForexAlertGetResponse;
    loading: boolean;
    submitButtonLabel: string;
    onSubmit: (alert: ForexAlertGetResponse) => void;
}

/**
 * Form for setting up forex alerts.
 */
class ForexAlertSetupForm extends Component<Props> {
    formRef = createRef<FormInstance>();

    handleFormValuesSubmit = async () => {
        const { onSubmit, alert } = this.props;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        onSubmit({
            id: alert?.id ?? "",
            frequency: validation.frequency,
            fromCurrency: validation.fromCurrency,
            toCurrency: validation.toCurrency,
            contactMethod: validation.contactMethod,
            minimumRate: validation.minimumRate
        });
    };

    render() {
        const { loading, submitButtonLabel, alert } = this.props;

        return (
            <Row justify="center" className={styles.container}>
                <Col>
                    <Text className={styles.header}>Setup Alert.</Text>
                </Col>

                <Col span={24}>
                    <Form<ForexAlertGetResponse>
                        ref={this.formRef}
                        disabled={loading}
                        onFinish={this.handleFormValuesSubmit}
                        initialValues={
                            alert ?? {
                                [AlertItem.frequency]: NotificationFrequency.once,
                                [AlertItem.contactMethod]: ContactMethod.email
                            }
                        }
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
                        loading={loading}
                    >
                        {submitButtonLabel}
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default ForexAlertSetupForm;