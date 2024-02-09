import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalRoute from './router/global-route';
import { store } from '@redux/configure-store';

import 'normalize.css';
import 'antd/dist/antd.css'; 
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalRoute />
        </Provider>
    </React.StrictMode>,
);
