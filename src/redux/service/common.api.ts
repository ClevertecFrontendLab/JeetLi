import {
    // BaseQueryFn,
    createApi,
    fetchBaseQuery,
    // FetchArgs,
    // FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../configure-store';
import { Url } from '../../models/constant';

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: Url.BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.jwt;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
