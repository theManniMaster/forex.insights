import { Component } from "react";
import { withRouting, WithRouting } from "../higher-order-components";
import { apiClient, ApiErrorResponse, ForexAlertGetResponse } from "../../api";
import { notification, Row, Spin, Typography } from "antd";
import { Routes } from "../../router";
import styles from "./styles/add-edit-alert-panel.module.less";
import { ForexAlertSetupForm } from "./components";

const { Text } = Typography;

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
            .catch((error: ApiErrorResponse) => {
                let description = "Couldn't create alert. Please try again.";

                if (error.errors.length > 0)
                    description = error.errors.map(e => e).join(" | ");

                notification.error({
                    message: "Error",
                    description
                });
            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <div className={styles.headerContainerr}>
                    <Row justify="center">
                        <Text className={styles.headerText}>Add Alert.</Text>
                    </Row>
                    <Row justify="center">
                        <Text className={styles.headerDescription}>Fill out this form and we'll send you a notification when the conditions are met.</Text>
                    </Row>
                </div>

                {
                    loading ?
                        <Spin className={styles.spin} />
                        :
                        <ForexAlertSetupForm
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