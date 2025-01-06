import { Component } from "react";
import styles from "./styles/reset-password.module.less";
import { Header } from "./components";

/**
 * Forgot password panel.
 */
class ResetPassword extends Component {
    render() {
        return (<div className={styles.container}>
            <Header />
        </div>);
    }
}

export default ResetPassword;