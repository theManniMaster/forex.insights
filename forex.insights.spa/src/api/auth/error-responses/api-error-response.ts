/**
 * Base class for API error responses.
 */
class ApiErrorResponse {
    /**
     * Errors returned by api.
     */
    errors: string[];

    constructor(errors: string[] = []) {
        this.errors = errors;
    }
}

export default ApiErrorResponse;