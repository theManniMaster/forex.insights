import { LoginResponse } from "./auth";
import dayjs, { Dayjs } from "dayjs";

/**
 * Auth Token class.
 */
class Token {
    key: string = "token";

    accessToken: string = "";
    refreshToken: string = "";
    expiry: Dayjs = dayjs();

    /**
     * Set token from login response.
     * @param response
     */
    setToken(response: LoginResponse) {
        this.accessToken = response.accessToken;
        this.refreshToken = response.refreshToken;
        this.expiry = dayjs().add(response.expiresIn, "seconds");
    }

    /**
     * Clear token.
     */
    clear() {
        this.accessToken = "";
        this.refreshToken = "";
        this.expiry = dayjs();
    }

    /**
     * Get stringified version of this class.
     * @returns token string.
     */
    getStringified() {
        return JSON.stringify(this);
    }

    /**
     * Parse token from string.
     * @param storageObject 
     */
    parse(storageObject: string | null) {
        if (!storageObject)
            return;

        const parsed = JSON.parse(storageObject);

        if (parsed.accessToken)
            this.accessToken = parsed.accessToken;

        if (parsed.refreshToken)
            this.refreshToken = parsed.refreshToken;

        if (parsed.expiry)
            this.expiry = parsed.expiry;
    }

    /**
     * Checks token validity.
     * @returns true if token is valid.
     */
    isValid() {
        if (this.accessToken === "" || dayjs().isAfter(this.expiry))
            return false;

        return true;
    }
}

const instance = new Token();

export default instance;