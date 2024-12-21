import { HttpMethod } from "./enums";


/**
 * Base client class for all API clients.
 */
class BaseClient {
    /**
     * Base URL for the API.
     */
    private baseUrl: string;

    /**
     * Constructor for the base client.
     */
    constructor() {
        this.baseUrl = import.meta.env.VITE_BASE_API_URL ?? "";
    }

    /**
     * Fetch data from the API.
     * @param endpoint Endpoint to fetch data from.
     * @param method HTTP method to use.
     * @param requestData Request data to send.
     */
    protected async fetchData<T>(endpoint: string, method: HttpMethod, requestData: object): Promise<T> {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        return await fetch(`${this.baseUrl}/${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: method !== HttpMethod.Get ? JSON.stringify(requestData) : undefined,
            mode: "cors"
        }).then(async (response) => {
            // fetch doesn't fail on 404.
            if (!response.ok) {
                console.log("404");
                return null;
            }
            else {
                return await response.json();
            }
        }).catch((error) => {
            console.log(error);
            return null;
        });
    }
}

export default BaseClient;