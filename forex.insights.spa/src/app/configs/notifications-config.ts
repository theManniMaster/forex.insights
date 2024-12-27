import { notification } from "antd";

/**
 * Configuration for the notifications.
 */
notification.config({
    duration: 2,
    showProgress: true,
    pauseOnHover: true,
    placement: "top",
    maxCount: 3,
    closable: false,
});