export { default as apiClient } from "./api-client";

export { ApiErrorResponse } from "./auth";
export type { LoginRequest, LoginResponse } from "./auth";

export { ContactMethod, NotificationFrequency } from "./forex-alert";
export type {
    ForexAlertGetRequest, ForexAlertGetResponse, ForexAlertSearchRequest, ForexAlertSearchResponse,
    ForexAlertPostRequest, ForexAlertPostResponse, ForexAlertDeleteRequest, ForexAlertPatchRequest
} from "./forex-alert";