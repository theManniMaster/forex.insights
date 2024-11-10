import { Component } from "react";
import { Col, Form, Input, Row, Select, Typography } from "antd";
import { AlertItem } from "../enums";
import styles from "./styles/currency-pair-selector.module.less";
import { countries } from "./data";

const { Item } = Form;
const { Text } = Typography;

/**
 * Component for selecting a currency pair.
 */
class CurrencyPairSelector extends Component {
    render() {
        return <Row>
            <Col span={24} md={10}>
                <Item
                    name={AlertItem.toCurrency}
                >
                    <Select
                        size="large"
                        options={countries}
                        optionRender={option =>
                            <Row>
                                <Col span={6}>
                                    <img
                                        className={styles.flag}
                                        src={option.data.flag}
                                        alt={option.data.name}
                                    />
                                </Col>
                                <Col span={18}>
                                    {option.data.currency + " - " + option.data.name}
                                </Col>
                            </Row>
                        }
                    />
                </Item>
            </Col>

            <Col span={24} md={4}>
                <Text className={styles.label}>to</Text>
            </Col>

            <Col span={24} md={10}>
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