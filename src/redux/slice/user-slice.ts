import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    jwt: string | null;
}

const initialState: AuthState = {
    jwt: null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setJwt(state, action: PayloadAction<string>) {
            state.jwt = action.payload;
        },
    },
});

export const { setJwt } = userSlice.actions;
export default userSlice.reducer;
