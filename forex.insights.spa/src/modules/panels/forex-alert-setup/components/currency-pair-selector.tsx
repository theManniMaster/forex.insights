import { Component } from "react";
import { Col, Form, Input, Row, Typography } from "antd";
import { AlertItem } from "../enums";
import styles from "./styles/currency-pair-selector.module.less";

const { Item } = Form;
const { Text } = Typography;

/**
 * Component for selecting a currency pair.
 */
class CurrencyPairSelector extends Component {
    render() {
        return <Row>
            <Col span={10}>
                <Item
                    name={AlertItem.toCurrency}
                >
                    <Input />
                </Item>
            </Col>

            <Col span={4}>
                <Text className={styles.label}>to</Text>
            </Col>

            <Col span={10}>
                <Item
                    name={AlertItem.fromCurrency}
                >
                    <Input />
                </Item>
            </Col>
        </Row>
    }
}

export default CurrencyPairSelector;