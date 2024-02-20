import { configureStore } from '@reduxjs/toolkit';
import { commonApi } from './service/common.api';
import userReducer from './slice/user-slice';
import { combineReducers } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import loadingReducer from './slice/loading-slice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        auth: userReducer,
        [commonApi.reducerPath]: commonApi.reducer,
        loading: loadingReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware).concat(commonApi.middleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
