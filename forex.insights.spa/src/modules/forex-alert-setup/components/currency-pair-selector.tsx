import { Component } from "react";
import { Col, Form, Row, Select, Typography } from "antd";
import { AlertItem } from "../enums";
import styles from "./styles/currency-pair-selector.module.less";
import { countries } from "./data";
import CurrencyDropdownItem from "./currency-dropdown-item";

const { Item } = Form;
const { Text } = Typography;

/**
 * Component for selecting a currency pair.
 */
class CurrencyPairSelector extends Component {
    render() {
        return <Row>
            <Col span={12}>
                <Item
                    name={AlertItem.fromCurrency}
                    rules={[{ required: true, message: "Please select a currency." }]}
                >
                    <Select
                        size="large"
                        placeholder="Search currency..."
                        options={countries.map(country => {
                            return {
                                label: <CurrencyDropdownItem country={country} />,
                                value: country.currency,
                                country
                            };
                        })}
                        optionRender={option => <CurrencyDropdownItem country={option.data.country} />}
                    />
                </Item>
            </Col>

            <Col span={24}>
                <Text className={styles.label}>to</Text>
            </Col>

            <Col span={12}>
                <Item
                    name={AlertItem.toCurrency}
                    rules={[{ required: true, message: "Please select a currency." }]}
                >
                    <Select
                        size="large"
                        placeholder="Search currency..."
                        options={countries.map(country => {
                            return {
                                label: <CurrencyDropdownItem country={country} />,
                                value: country.currency,
                                country
                            };
                        })}
                        optionRender={option => <CurrencyDropdownItem country={option.data.country} />}
                    />
                </Item>
            </Col>
        </Row>
    }
}

export default CurrencyPairSelector;