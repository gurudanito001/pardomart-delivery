import api from "./api";
import type { User } from "../api-client/models/user";
import type { PaginatedUsers } from "../api-client/models/paginated-users";

/**
 * NOTE: The API spec does not expose an explicit "current user / me" endpoint.
 * As a best-effort fallback, we request the first page of users and return the
 * first entry. If the backend restricts this to admins, this may fail with 401/403.
 */
async function getProfile(): Promise<User | null> {
  const userApi = api.getUserApi();
  const resp = await userApi.usersGet(undefined, undefined, undefined, undefined, 1, 1);
  const data = (resp.data as PaginatedUsers)?.data ?? [];
  return data?.[0] ?? null;
}

export default {
  getProfile,
};


