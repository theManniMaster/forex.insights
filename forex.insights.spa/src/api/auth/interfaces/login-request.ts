/**
 * Login request interface.
 */
interface LoginRequest {
    /**
     * Email.
     */
    email: string;

    /**
     * Password.
     */
    password: string;
}

export type { LoginRequest };