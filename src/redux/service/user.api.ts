import { UserAutarization, UserWithToken, UserRegistration } from '../../models/types';
import { commonApi } from '../service/common.api';
import { Authorize } from '../../models/constant';
import { setJwt } from '@redux/slice/user-slice';

export const userApi = commonApi.injectEndpoints({
    endpoints: (build) => ({
        regUser: build.mutation<UserWithToken, UserRegistration>({
            query: (userInfo) => ({
                url: Authorize.REGISTRATION,
                method: 'POST',
                body: userInfo,
            }),
        }),
        login: build.mutation<UserWithToken, UserAutarization>({
            query: (credentials) => ({
                url: Authorize.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setJwt(data.accessToken));
                    if (arg.remember) {
                        localStorage.setItem('jwtToken', data.accessToken);
       
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegUserMutation } = userApi;
