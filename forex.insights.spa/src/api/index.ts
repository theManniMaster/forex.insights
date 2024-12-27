export { default as apiClient } from "./api-client";

export type { ApiErrorResponse, LoginRequest, LoginResponse } from "./auth";

export { ContactMethod, NotificationFrequency } from "./forex-alert";
export type {
    ForexAlertGetRequest, ForexAlertGetResponse, ForexAlertSearchRequest, ForexAlertSearchResponse,
    ForexAlertPostRequest, ForexAlertPostResponse, ForexAlertDeleteRequest, ForexAlertPatchRequest
} from "./forex-alert";