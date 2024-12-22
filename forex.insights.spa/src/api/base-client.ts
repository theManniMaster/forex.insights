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
        this.baseUrl = import.meta.env.VITE_BASE_API_URL;
    }

    /**
     * Fetch data from the API.
     * @param method HTTP method to use.
     * @param requestData Request data to send.
     * @param endpoint Endpoint to fetch data from.
     */
    protected async fetchData<T>(method: HttpMethod, requestData: object, endpoint: string): Promise<T> {
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
            if (!response.ok)
                throw new Error();

            /**
             * some responses will not have a body (Delete and Patch in our case).
             * so we need to check if the response has a body before trying to parse it.
             * Calling .text() gets the body of the response and returns a promise that resolves to a string.
             */
            return response.text().then((text) => {
                return text ? JSON.parse(text) : {};
            });
        }).catch((error) => {
            throw new Error(error);
        });
    }
}

export default BaseClient;