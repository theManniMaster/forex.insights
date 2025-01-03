import { Component } from "react";
import { Col, Form, Select } from "antd";
import { AlertItem } from "../enums";
import { countries } from "./data";
import CurrencyDropdownItem from "./currency-dropdown-item";

const { Item } = Form;

/**
 * Component for selecting a currency pair.
 */
class CurrencyPairSelector extends Component {
    render() {
        return <>
            <Col>
                <Item
                    name={AlertItem.fromCurrency}
                    label="When"
                    rules={[{ required: true, message: "Please select a currency." }]}
                >
                    <Select
                        showSearch
                        allowClear
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

            <Col>
                <Item
                    name={AlertItem.toCurrency}
                    label="To"
                    rules={[{ required: true, message: "Please select a currency." }]}
                >
                    <Select
                        showSearch
                        allowClear
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
        </>
    }
}

export default CurrencyPairSelector;