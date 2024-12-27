import { ApiErrorResponse, AuthClient } from "./auth";
import { HttpMethod } from "./enums";
import { ForexAlertClient } from "./forex-alert";
import Token from "./token";

/**
 * Class to handle all API requests.
 */
class ApiClient {
    private baseUrl: string;
    private token: Token;

    /**
     * Constructor for the base client.
     */
    constructor() {
        this.baseUrl = import.meta.env.VITE_BASE_API_URL;
        this.token = new Token();

        this.auth = new AuthClient(this.baseUrl, () => this.token);
    }

    /**
     * Fetch data from the API.
     * @param method HTTP method to use.
     * @param requestData Request data to send.
     * @param endpoint Endpoint to fetch data from.
     */
    private fetchData = async <T>(method: HttpMethod, requestData: object, endpoint: string): Promise<T> => {
        if (!this.token.isValid())
            this.auth.refreshToken();

        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        return await fetch(`${this.baseUrl}/${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token.accessToken}`
            },
            body: method !== HttpMethod.Get ? JSON.stringify(requestData) : undefined,
            mode: "cors"
        }).then(async (response) => {
            if (!response.ok) {
                const errorResponse = await response.text().then(text => text ? JSON.parse(text) : {});
                const errors: string[] = [];

                if (errorResponse.errors) {
                    Object.values(errorResponse.errors).forEach((value) => {
                        errors.push(value as string);
                    });
                }

                throw new ApiErrorResponse(errors);
            }

            return await response.text().then((text) => {
                return text ? JSON.parse(text) : {};
            });
        });
    }

    /**
     * Auth client.
     */
    auth: AuthClient;

    /**
     * Forex alert client.
     */
    forexAlert = new ForexAlertClient(this.fetchData);
}

const instance = new ApiClient();

export default instance;