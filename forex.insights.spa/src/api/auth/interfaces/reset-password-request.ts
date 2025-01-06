/**
 * Reset password request interface.
 */
interface ResetPasswordRequest {
    /**
     * Email.
     */
    email: string;

    /**
     * Reset code.
     */
    resetCode: string;

    /**
     * New password.
     */
    newPassword: string;
}

export type { ResetPasswordRequest };