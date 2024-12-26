/**
 * Interface for the login response.
 */
interface LoginResponse {
    /**
     * Access token.
     */
    accessToken: string;

    /**
     * Refresh token.
     */
    refreshToken: string;

    /**
     * Expiry time - in seconds.
     */
    expiresIn: number;
}

export type { LoginResponse };