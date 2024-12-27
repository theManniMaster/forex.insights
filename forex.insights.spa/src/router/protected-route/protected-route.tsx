import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../enum";
import { apiClient } from "../../api";
import { Button, Row } from "antd";
import styles from "./styles/protected-route.module.less";

/**
 * Parent component for routes that require login.
 */
class ProtectedRoute extends Component {

    logOut = () => {
        apiClient.auth
            .logout()
            .then(() => {
                window.location.reload();
            });
    }

    render() {
        return (
            apiClient.auth.isLoggedIn() ?
                <>
                    <Row justify="center" className={styles.logoutContainer}>
                        <Button
                            onClick={this.logOut}
                        >
                            Log out.
                        </Button>
                    </Row>

                    <Outlet />
                </>
                :
                <Navigate to={Routes.login} replace />
        );
    }
}

export default ProtectedRoute;