import { HttpMethod } from "../enums";

/**
 * Api client for user.
 */
class UserClient {
    private endpoint: string = "api/user";
    private fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>;

    /**
     * Constructor for the user client.
     * @param fetchData Fetch data function.
     */
    constructor(fetchData: <T>(method: HttpMethod, requestData: object, endpoint: string) => Promise<T>) {
        this.fetchData = fetchData;
    }

    /**
     * Delete the current user.
     * @returns Promise.
     */
    delete() {
        return this.fetchData<void>(
            HttpMethod.Delete,
            {},
            `${this.endpoint}`
        );
    }
}

export default UserClient;