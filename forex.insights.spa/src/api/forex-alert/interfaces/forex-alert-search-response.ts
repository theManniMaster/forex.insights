import { ForexAlertGetResponse } from "./forex-alert-get-response";

/**
 * Forex alert search response.
 */
interface ForexAlertSearchResponse {
    /**
     * Requested forex alerts.
     */
    forexAlerts: ForexAlertGetResponse[];
}

export type { ForexAlertSearchResponse };