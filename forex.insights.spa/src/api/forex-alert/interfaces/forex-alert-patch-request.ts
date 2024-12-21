import { ContactMethod, NotificationFrequency } from "../enums";

/**
 * Forex alert patch request.
 */
interface ForexAlertPatchRequest {
    /**
     * Unique Identifier.
     */
    id: string;

    /**
     * Notification frequency.
     */
    frequency?: NotificationFrequency;

    /**
     * Currency to convert from.
     */
    fromCurrency?: string;

    /**
     * Currency to convert to.
     */
    toCurrency?: string;

    /**
     * Minimum rate for alert.
     */
    minimumRate?: number;

    /**
     * The contact method.
     */
    contactMethod?: ContactMethod;
}

export type { ForexAlertPatchRequest };