/**
 * Register request interface.
 */
interface RegisterRequest {
    /**
     * Email.
     */
    email: string;

    /**
     * Password.
     */
    password: string;
}

export type { RegisterRequest };