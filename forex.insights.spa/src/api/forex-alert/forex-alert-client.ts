import { HttpMethod } from "../enums";
import { ForexAlertGetRequest, ForexAlertGetResponse, ForexAlertPatchRequest, ForexAlertPostRequest, ForexAlertPostResponse, ForexAlertSearchRequest, ForexAlertSearchResponse } from "./interfaces";

/**
 * Api client for forex alert.
 */
class ForexAlertClient {
    private endpoint: string = "api/forexAlert";
    private fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>;

    /**
     * Constructor for the forex alert client.
     * @param fetchData Fetch data function.
     */
    constructor(fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>) {
        this.fetchData = fetchData;
    }

    /**
     * Get forex alerts.
     * @param data Request data.
     */
    get(data: ForexAlertGetRequest) {
        return this.fetchData<ForexAlertGetResponse>(
            HttpMethod.Get,
            data,
            `${this.endpoint}/${data.id}`
        );
    }

    /**
     * Search forex alerts.
     * @param data Request data.
     */
    search(data: ForexAlertSearchRequest) {
        return this.fetchData<ForexAlertSearchResponse>(
            HttpMethod.Get,
            data,
            `${this.endpoint}?${data.ids && data.ids.length > 0 ? data.ids.map(id => `ids=${id}&`) : ""}`
        );
    }

    /**
     * Create a new forex alert.
     * @param data Request data.
     */
    post(data: ForexAlertPostRequest) {
        return this.fetchData<ForexAlertPostResponse>(
            HttpMethod.Post,
            data,
            `${this.endpoint}`
        );
    }

    /**
     * Update an existing forex alert.
     * @param data Request data.
     */
    patch(data: ForexAlertPatchRequest) {
        return this.fetchData<void>(
            HttpMethod.Patch,
            data,
            `${this.endpoint}/${data.id}`
        );
    }

    /**
     * Delete an existing forex alert.
     * @param data Request data.
     */
    delete(data: ForexAlertGetRequest) {
        return this.fetchData<void>(
            HttpMethod.Delete,
            data,
            `${this.endpoint}/${data.id}`
        );
    }
}

export default ForexAlertClient;