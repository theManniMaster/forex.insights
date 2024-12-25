import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Routes } from "../enum";

/**
 * Parent component for routes that require login.
 */
class ProtectedRoute extends Component {
    render() {
        const token = localStorage.getItem("token");

        // update logic.

        return (token ? <Outlet /> : <Navigate to={Routes.login} replace />);
    }
}

export default ProtectedRoute;