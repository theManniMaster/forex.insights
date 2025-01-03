import { Component, createRef } from "react";
import { ContactMethod, ForexAlertGetResponse, NotificationFrequency } from "../../../api";
import { Button, Col, Form, FormInstance, Input, Radio, Row, Tooltip } from "antd";
import CurrencyPairSelector from "./currency-pair-selector";
import { AlertItem } from "../enums";
import styles from "./styles/forex-alert-setup-form.module.less";

const { Item } = Form;

/**
 * Props for the forex alert setup form.
 */
interface Props {
    alert?: ForexAlertGetResponse;
    submitButtonLabel: string;
    onSubmit: (alert: ForexAlertGetResponse) => void;
}

/**
 * Form for setting up forex alerts.
 */
class ForexAlertSetupForm extends Component<Props> {
    formRef = createRef<FormInstance>();
    minRate = 0.01;
    maxRate = 9999999.99;

    handleFormValuesSubmit = async () => {
        const { onSubmit, alert } = this.props;
        const validation = await this.formRef.current?.validateFields().catch(() => undefined);

        if (!validation)
            return;

        onSubmit({
            id: alert?.id ?? "",
            frequency: validation[AlertItem.frequency],
            fromCurrency: validation[AlertItem.fromCurrency],
            toCurrency: validation[AlertItem.toCurrency],
            contactMethod: validation[AlertItem.contactMethod],
            minimumRate: validation[AlertItem.minimumRate],
            isActive: alert?.isActive ?? true,
        });
    };

    render() {
        const { submitButtonLabel, alert } = this.props;

        return (
            <Form<ForexAlertGetResponse>
                className={styles.container}
                ref={this.formRef}
                layout="vertical"
                onFinish={this.handleFormValuesSubmit}
                initialValues={
                    alert ?? {
                        [AlertItem.frequency]: NotificationFrequency.once,
                        [AlertItem.contactMethod]: ContactMethod.email
                    }
                }
            >
                <Row justify="center" gutter={[0, 8]}>
                    <Col span={24}>
                        <Item
                            name={AlertItem.frequency}
                            label="Notify me"
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

                    <Col span={24}>
                        <CurrencyPairSelector />
                    </Col>

                    <Col span={24}>
                        <Item
                            name={AlertItem.minimumRate}
                            label="Reaches a minimum of"
                            rules={[
                                { required: true, message: "Please enter the minimum amount to trigger this alert." },
                                {
                                    validator: (_, value) => value < this.minRate || value > this.maxRate ? Promise.reject() : Promise.resolve(),
                                    message: "Value must be in the range 0.01 - 9,999,999.99"
                                }
                            ]}
                        >
                            <Input
                                type="number"
                                placeholder="Enter amount"
                            />
                        </Item>
                    </Col>

                    <Col span={24}>
                        <Item
                            name={AlertItem.contactMethod}
                            label="Through"
                            rules={[{ required: true, message: "Please select a contact method." }]}
                        >
                            <Radio.Group
                                optionType="button"
                                buttonStyle="solid"
                            >
                                <Radio value={ContactMethod.email}>Email</Radio>

                                <Tooltip title="Coming soon">
                                    <Radio value={ContactMethod.sms} disabled>SMS</Radio>
                                </Tooltip>
                            </Radio.Group>
                        </Item>
                    </Col>

                <Col>
                    <Button
                        className={styles.button}
                        type="primary"
                        onClick={() => this.formRef.current?.submit()}
                    >
                        {submitButtonLabel}
                    </Button>
                </Col>
            </Row>
        </Form>
        );
    }
}

export default ForexAlertSetupForm;