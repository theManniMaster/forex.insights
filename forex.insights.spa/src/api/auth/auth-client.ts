import BaseClient from "../base-client";
import { HttpMethod } from "../enums";
import { LoginRequest, LoginResponse } from "./interfaces";

/**
 * Api client for auth.
 */
class AuthClient extends BaseClient {

    /**
     * Login.
     * @param data Request data.
     */
    login(data: LoginRequest) {
        return this.fetchData<LoginResponse>(
            HttpMethod.Post,
            data,
            "login"
        );
    }
}

export default AuthClient;