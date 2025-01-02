import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../enum";
import { apiClient } from "../../api";
import { Button, Col, notification, Popconfirm, Row, Spin } from "antd";
import styles from "./styles/protected-route.module.less";
import { WithRouting, withRouting } from "../../modules";

/**
 * Protected route props.
 */
interface Props extends WithRouting { }

/**
 * Protected route state.
 */
interface State {
    loading: boolean;
}

/**
 * Parent component for routes that require login.
 */
class ProtectedRoute extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    deleteAccount = () => {
        this.setState({ loading: true });

        apiClient.user
            .delete()
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "Account deleted successfully. You're being logged out."
                });

                this.logOut();
            })
            .catch(() => {
                notification.error({
                    message: "Error",
                    description: "An error occurred while deleting your account."
                });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    };

    logOut = () => {
        apiClient.auth
            .logout()
            .then(() => {
                window.location.reload();
            });
    };

    render() {
        const { navigate } = this.props;
        const { loading } = this.state;

        return (
            apiClient.auth.isLoggedIn() ?
                <>
                    <Row justify="center" gutter={[12, 12]} className={styles.logoutContainer}>
                        <Col>
                            <Button
                                onClick={this.logOut}
                                disabled={loading}
                            >
                                Log out
                            </Button>
                        </Col>
                        <Col>
                            <Popconfirm
                                title="Are you sure?"
                                description="This action is irreversible. All linked alerts will also be deleted."
                                okText="Delete"
                                okButtonProps={{ danger: true, loading: loading }}
                                onConfirm={this.deleteAccount}
                                cancelButtonProps={{ disabled: loading }}
                            >
                                <Button
                                    type="primary"
                                    danger
                                    loading={loading}
                                >
                                    Delete Account
                                </Button>
                            </Popconfirm>
                        </Col>
                    </Row>

                    {
                        loading ? <Spin className={styles.spin} /> : <Outlet />
                    }

                    <Row justify="center" className={styles.feedbackContainer}>
                        <Button
                            type="text"
                            disabled={loading}
                            onClick={() => navigate(Routes.feedback)}
                        >
                            Send Feedback
                        </Button>
                    </Row>
                </>
                :
                <Navigate to={Routes.login} replace />
        );
    }
}

const ComponentWithRouting = withRouting(ProtectedRoute);

export default ComponentWithRouting;