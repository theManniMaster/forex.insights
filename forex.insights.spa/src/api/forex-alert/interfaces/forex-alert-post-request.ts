import { ContactMethod, NotificationFrequency } from "../enums";

/**
 * Forex alert post request.
 */
interface ForexAlertPostRequest {
    /**
     * Notification frequency.
     */
    frequency: NotificationFrequency;

    /**
     * Currency to convert from.
     */
    fromCurrency: string;

    /**
     * Currency to convert to.
     */
    toCurrency: string;

    /**
     * Minimum rate for alert.
     */
    minimumRate: number;

    /**
     * The contact method.
     */
    contactMethod: ContactMethod;
}

export type { ForexAlertPostRequest };