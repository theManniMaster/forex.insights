import { HttpMethod } from "../enums";
import Token from "../token";
import { LoginRequest } from "./interfaces";

/**
 * Api client for auth.
 */
class AuthClient {
    private key: string = "auth_token";
    private baseUrl: string;
    private getToken: () => Token;

    /**
     * Constructor for the auth client.
     * @param baseUrl Base URL for the API.
     * @param getToken Function to get the token.
     */
    constructor(baseUrl: string, getToken: () => Token) {
        this.getToken = getToken;
        this.baseUrl = baseUrl;

        this.setTokenFromLocalStorage();
    }

    /**
     * Set token from local storage (if it exists).
     */
    private setTokenFromLocalStorage() {
        const storageObject = localStorage.getItem(this.key);

        if (storageObject)
            this.getToken().parse(storageObject);
    }

    /**
     * Add token to local storage.
     */
    private addToLocalStorage() {
        localStorage.setItem(this.key, this.getToken().getStringified());
    }

    /**
     * Logout.
     */
    logout() {
        localStorage.removeItem(this.key);
        return Promise.resolve();
    }

    /**
     * Check if user is logged in.
     */
    isLoggedIn() {
        return this.getToken().isValid();
    }

    /**
     * Login.
     * @param data Request data.
     */
    login(data: LoginRequest) {
        return this.fetchData(data, "login");
    }

    /**
     * Refresh token.
     */
    refreshToken() {
        this.fetchData({ refreshToken: this.getToken().refreshToken }, "refresh");
    }

    /**
     * Fetch data from the API.
     * @param requestData Request data to send.
     * @param endpoint Endpoint to fetch data from.
     */
    private async fetchData(requestData: object, endpoint: string): Promise<void> {
        return await fetch(`${this.baseUrl}/${endpoint}`, {
            method: HttpMethod.Post,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData),
            mode: "cors"
        }).then(async (response) => {
            if (!response.ok) 
                throw new Error();

            await response.text().then((text) => {
                this.getToken().parse(text);
                this.addToLocalStorage();
            })

        }).catch((error) => {
            throw new Error(error);
        });
    }
}

export default AuthClient;