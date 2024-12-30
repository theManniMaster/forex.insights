import { Col, Row } from "antd";
import { Component } from "react";
import styles from "./styles/currency-dropdown-item.module.less";
import { Country } from "./interfaces";

/**
 * Props for the currency dropdown item.
 */
interface Props {
    country: Country;
}

/**
 * Component for a currency dropdown item.
 */
class CurrencyDropdownItem extends Component<Props> {
    render() {
        const { country } = this.props;

        return <Row justify="center" align="middle">
            <Col span={6}>
                <img
                    className={styles.flag}
                    src={country.flag}
                    alt={country.name}
                />
            </Col>
            <Col span={18}>
                {country.currency + " - " + country.name}
            </Col>
        </Row>;
	}
}

export default CurrencyDropdownItem;