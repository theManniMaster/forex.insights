import { Component } from "react";
import { ForexAlertGetResponse } from "../../../../api";
import { Card } from "antd";

/**
 * Dashboard item card props.
 */
interface Props {
    alert: ForexAlertGetResponse;
}

/**
 * Dashboard item card.
 */
class DashboardItemCard extends Component<Props> {
    render() {
        const { alert } = this.props;

        return <Card>
            
        </Card>;
    }
}

export default DashboardItemCard;