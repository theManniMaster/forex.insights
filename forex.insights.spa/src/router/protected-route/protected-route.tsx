import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../enum";
import { token } from "../../api";

/**
 * Parent component for routes that require login.
 */
class ProtectedRoute extends Component {
    render() {
        return (
            token.isValid() ? <Outlet /> : <Navigate to={Routes.login} replace />
        );
    }
}

export default ProtectedRoute;