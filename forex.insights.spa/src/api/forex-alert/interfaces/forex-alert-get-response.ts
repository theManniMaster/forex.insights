import { ContactMethod, NotificationFrequency } from "../enums";

/**
 * Forex alert get response.
 */
interface ForexAlertGetResponse {
    /**
     * Unique Identifier.
     */
    id: string;

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

    /**
     * If Alert is active.
     */
    isActive: boolean;

    /**
     * Last sent time.
     */
    lastSentTime?: string;
}

export type { ForexAlertGetResponse };