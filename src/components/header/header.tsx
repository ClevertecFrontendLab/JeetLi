import { SettingOutlined } from '@ant-design/icons';
import { Button, PageHeader, Row, Typography } from 'antd';
import React from 'react';
import './header.css';
const { Title, Text } = Typography;

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Главная',
    },
];

const content = (
    <>
        <Title>
            Приветствуем тебя в CleverFit — приложении, <br /> которое поможет тебе добиться своей
            мечты!
        </Title>
    </>
);

const Content: React.FC<{ children: React.ReactNode; extraContent: React.ReactNode }> = ({
    children,
    extraContent,
}) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div>{extraContent}</div>
    </Row>
);

export const HeaderComponent: React.FC = () => (
    <PageHeader
        style={{ backgroundColor: '#F0F5FF' }}
        className='site-page-header'
    
        breadcrumb={{ routes }}
    >
        <Content
            extraContent={
                <Button className='header-button' key='1'>
                    <SettingOutlined className='header-button-icon' />
                    <Text className='header-button-text'>Настройки</Text>
                </Button>
            }
        >
            {content}
        </Content>
    </PageHeader>
);
