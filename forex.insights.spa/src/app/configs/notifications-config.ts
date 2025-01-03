import { notification } from "antd";

/**
 * Configuration for the notifications.
 */
notification.config({
    duration: 5,
    showProgress: true,
    pauseOnHover: true,
    placement: "top",
    maxCount: 3,
    closable: true,
});