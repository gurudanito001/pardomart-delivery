import { useCallback, useMemo, useState } from 'react';

// API & Models
import { apiConfig } from '../../api/config';
import { UserApi } from '../../api/endpoints/user-api';
import { UpdateUserPayload } from '../../api/models';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Types
type ApiError = { response?: { data?: { message?: string } }; message?: string };

interface UseUserState {
  loading: boolean;
  error: string | null;
}

export const useUser = () => {

  const { state: authState, updateUser: updateAuthUser } = useAuth();
  const [state, setState] = useState<UseUserState>({
    loading: false,
    error: null,
  });

  const userApi = useMemo(() => new UserApi(apiConfig), []);

  const handleError = useCallback((error: ApiError, defaultMessage: string) => {
    const errorMessage = error?.response?.data?.message || error?.message || defaultMessage;
    return errorMessage;
  }, []);

  const updateProfile = useCallback(async (payload: UpdateUserPayload) => {
    if (!authState.user?.id) {
      throw new Error('User must be authenticated to update profile');
    }

    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await userApi.usersUpdatePut(payload);
      
      // Update the user data in AuthContext
      updateAuthUser(response.data);
      
      setState(prev => ({ ...prev, loading: false }));
      return response.data;
    } catch (error: any) {
      const errorMessage = handleError(error, 'Failed to update profile');
      setState(prev => ({ 
        ...prev, 
        loading: false,
        error: errorMessage 
      }));
      throw error;
    }
  }, [userApi, authState.user?.id, updateAuthUser, handleError]);

  const fetchUser = useCallback(async (userId?: string) => {
    const targetUserId = userId || authState.user?.id;
    if (!targetUserId) {
      throw new Error('User ID is required to fetch user data');
    }

    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response = await userApi.usersIdGet(targetUserId);
      
      // If fetching current user, update AuthContext
      if (!userId || userId === authState.user?.id) {
        updateAuthUser(response.data);
      }
      
      setState(prev => ({ ...prev, loading: false }));
      return response.data;
    } catch (error: any) {
      const errorMessage = handleError(error, 'Failed to fetch user data');
      setState(prev => ({ 
        ...prev, 
        loading: false,
        error: errorMessage 
      }));
      throw error;
    }
  }, [userApi, authState.user?.id, updateAuthUser, handleError]);

  const refreshProfile = useCallback(async () => {
    if (!authState.user?.id) return null;
    return fetchUser(authState.user.id);
  }, [fetchUser, authState.user?.id]);

  return {
    ...state,
    user: authState.user,
    updateProfile,
    fetchUser,
    refreshProfile,
  };
};
