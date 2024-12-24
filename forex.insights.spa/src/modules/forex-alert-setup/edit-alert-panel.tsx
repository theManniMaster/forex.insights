import { Component } from "react";
import { withRouting, WithRouting } from "../higher-order-components";
import { RouteParams, Routes } from "../../router";
import { apiClient, ForexAlertGetResponse } from "../../api";
import { notification, Spin } from "antd";
import styles from "./styles/add-edit-alert-panel.module.less";
import { ForexAlertSetupForm } from "./components";

/**
 * Edit alert panel props.
 */
interface Props extends WithRouting { }

/**
 * Edit alert panel state.
 */
interface State {
    loading: boolean;
    alert?: ForexAlertGetResponse;
}

/**
 * Panel for editing alerts.
 */
class EditAlertPanel extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: true,
        };
    }

    componentDidMount = () => {
        const { params, navigate } = this.props;

        if (params[RouteParams.id]) {
            apiClient.forexAlert
                .get({
                    id: params[RouteParams.id]
                })
                .then((alert) => {
                    this.setState({ loading: false, alert });
                })
                .catch(() => {
                    navigate(Routes.oops);
                });
        }
        else {
            this.setState({ loading: false });
        }
    }

    editAlert = (alert: ForexAlertGetResponse) => {
        const { navigate } = this.props;

        this.setState({ loading: true });

        apiClient.forexAlert
            .patch({
                ...alert,
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "Alert updated successfully."
                });

                navigate(Routes.dashboard);
            })
            .catch(() => {
                notification.error({
                    message: "Error",
                    description: "Couldn't update alert. Please try again."
                });
            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { loading, alert } = this.state;

        return (
            <>
                {
                    loading ?
                        <Spin className={styles.spin} />
                        :
                        <ForexAlertSetupForm
                            alert={alert}
                            loading={loading}
                            submitButtonLabel="Edit"
                            onSubmit={this.editAlert}
                        />
                }
            </>
        );
    }
}

const ComponentWithRouting = withRouting(EditAlertPanel);

export default ComponentWithRouting;