import React from 'react';
import { Layout, Typography } from 'antd';
import './header.css';

const { Header } = Layout;

const { Title } = Typography;

export const HeaderComponent: React.FC = () => {
    return (
        <Header className='header' style={{ background: 'rgb(240, 245, 255)' }}>
            <div className='breadcrumbs'>
                <Title level={4}>Главная</Title>
            </div>
            <div className='content'>
                <div></div>
                <div></div>
            </div>
        </Header>
    );
};
