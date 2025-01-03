import { HttpMethod } from "../enums";
import { FeedbackPostRequest } from "./interfaces/feedback-post-request";

/**
 * Api client for feedback.
 */
class FeedbackClient {
    private endpoint: string = "api/feedback";
    private fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>;

    /**
     * Constructor for the forex alert client.
     * @param fetchData Fetch data function.
     */
    constructor(fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>) {
        this.fetchData = fetchData;
    }

    /**
     * Create a new feedback.
     * @param data Request data.
     */
    post(data: FeedbackPostRequest) {
        return this.fetchData<void>(
            HttpMethod.Post,
            data,
            `${this.endpoint}`
        );
    }
}

export default FeedbackClient;