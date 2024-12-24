import { Component } from "react";
import { withRouting, WithRouting } from "../higher-order-components";
import { apiClient, ForexAlertGetResponse } from "../../api";
import { notification, Spin } from "antd";
import { Routes } from "../../router";
import styles from "./styles/add-edit-alert-panel.module.less";
import { ForexAlertSetupForm } from "./components";

/**
 * Add alert panel props.
 */
interface Props extends WithRouting { }

/**
 * Add alert panel state.
 */
interface State {
    loading: boolean;
}

/**
 * Panel for adding alerts.
 */
class AddAlertPanel extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    addAlert = (alert: ForexAlertGetResponse) => {
        const { navigate } = this.props;

        this.setState({ loading: true });

        apiClient.forexAlert
            .post({
                frequency: alert.frequency,
                fromCurrency: alert.fromCurrency,
                toCurrency: alert.toCurrency,
                contactMethod: alert.contactMethod,
                minimumRate: alert.minimumRate
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "Alert created successfully."
                });
                
                navigate(Routes.dashboard);
            })
            .catch(() => {
                notification.error({
                    message: "Error",
                    description: "Couldn't create alert. Please try again."
                });
            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                {
                    loading ?
                        <Spin className={styles.spin} />
                        :
                        <ForexAlertSetupForm
                            loading={loading}
                            submitButtonLabel="Create"
                            onSubmit={this.addAlert}
                        />
                }
            </>
        );
    }
}

const ComponentWithRouting = withRouting(AddAlertPanel);

export default ComponentWithRouting;