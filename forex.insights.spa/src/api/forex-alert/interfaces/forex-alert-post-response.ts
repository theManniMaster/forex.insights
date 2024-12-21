/**
 * Forex alert post response.
 */
interface ForexAlertPostResponse {
    /**
     * Unique Identifier.
     */
    id: string;

    /**
     * Next alert time.
     */
    nextAlertTime?: string;
}

export type { ForexAlertPostResponse };