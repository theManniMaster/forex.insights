import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../enum";
import { apiClient } from "../../api";
import { Button, Col, notification, Popconfirm, Row, Spin } from "antd";
import styles from "./styles/protected-route.module.less";

/**
 * Protected route props.
 */
interface Props { }

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
        const { loading } = this.state;

        return (
            apiClient.auth.isLoggedIn() ?
                <>
                    <Row justify="center" gutter={[12, 0]} className={styles.logoutContainer}>
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
                        <Col>
                            <Button
                                onClick={this.logOut}
                                disabled={loading}
                            >
                                Log out
                            </Button>
                        </Col>
                    </Row>

                    {
                        loading ? <Spin className={styles.spin} /> : <Outlet />
                    }
                </>
                :
                <Navigate to={Routes.login} replace />
        );
    }
}

export default ProtectedRoute;