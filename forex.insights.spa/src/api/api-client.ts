import { ForexAlertClient } from "./forex-alert";

/**
 * Class to handle all API requests.
 */
class ApiClient {
    /**
     * Forex alert client.
     */
    forexAlert = new ForexAlertClient();
}

const instance = new ApiClient();

export default instance;