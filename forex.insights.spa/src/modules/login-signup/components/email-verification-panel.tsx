import { Alert, Button, notification, Typography } from "antd";
import { Component } from "react";
import styles from "./styles/email-verification-panel.module.less";
import { apiClient } from "../../../api";

const { Text } = Typography;

/**
 * Email verification panel props.
 */
interface Props {
    visible: boolean;
    isLogin: boolean;
    email: string;
}

/**
 * Email verification component.
 */
class EmailVerificationPanel extends Component<Props> {

    handleResendVerificationButtonClick = () => {
        const { email } = this.props;

        if (!email)
            return;

        apiClient.auth
            .resendVerificationEmail({
                email
            })
            .then(() => {
                notification.success({
                    message: "Success",
                    description: "Confirmation email sent.",
                })
            })
            .catch(() => { });
    };

    render() {
        const { visible, isLogin } = this.props;

        return (
            visible &&
            <>
                {
                    isLogin ? 
                        <Alert
                            className={styles.alert}
                            type="info"
                            message={
                                <Text className={styles.text}>
                                    Did you forget to verify your email?
                                    <Button
                                        type="text"
                                        onClick={this.handleResendVerificationButtonClick}
                                    >
                                        Resend Verification
                                    </Button>
                                </Text>
                            }
                        />
                        :
                        <Alert
                            className={styles.alert}
                            type="success"
                            message={
                                <Text className={styles.text}>
                                    Confirmation email sent.
                                    <Button
                                        type="text"
                                        onClick={this.handleResendVerificationButtonClick}
                                    >
                                        Send Again
                                    </Button>
                                </Text>
                            }
                        />
                }
            </>            
        );
    }
}

export default EmailVerificationPanel;