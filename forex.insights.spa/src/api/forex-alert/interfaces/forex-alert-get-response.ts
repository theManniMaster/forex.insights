import { ContactMethod, NotificationFrequency } from "../enums";

/**
 * Forex alert get response.
 */
interface ForexAlertGetResponse {
    /**
     * The alert id.
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
     * Next alert time.
     */
    nextAlertTime?: string;
}

export type { ForexAlertGetResponse };