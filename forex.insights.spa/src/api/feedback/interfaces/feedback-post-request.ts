/**
 * Interface for the feedback post request.
 */
interface FeedbackPostRequest {
    /**
     * First name.
     */
    firstName: string;

    /**
     * Last name.
     */
    lastName: string;

    /**
     * User's feedback.
     */
    feedback: string;
}

export type { FeedbackPostRequest };