import BaseClient from "../base-client";
import { HttpMethod } from "../enums";
import { ForexAlertGetRequest, ForexAlertGetResponse } from "./interfaces";

/**
 * Api client for forex alert.
 */
class ForexAlertClient extends BaseClient {
    private endpoint: string = "api/forexAlert";

    /**
     * Get forex alerts.
     * @param data Request data.
     */
    get(data: ForexAlertGetRequest) {
        return this.fetchData<ForexAlertGetResponse>(this.endpoint, HttpMethod.Get, data);
    }
}

export default ForexAlertClient;