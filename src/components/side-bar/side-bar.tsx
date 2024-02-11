import './side-bar.css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { CleverfitLogo, FitLogo } from '../ui/graphics';
import { MenuComponent } from '@components/common/nav-items/index';
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SideBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Sider
            className='sider-layout'
            width={isMobile ? 106 : 200}
            collapsedWidth={isMobile && collapsed ? 0 : 64}
            theme='light'
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            trigger={null}
        >
            <div className='side-nav_wrapper' style={collapsed ? { width: 64 } : { width: 200 }}>
                <div className='side-logo_wrapper'>
                    {collapsed ? <FitLogo /> : <CleverfitLogo />}
                </div>
                <MenuComponent itemIds={['1', '2', '3', '4']} color='#061178' />
            </div>
            <MenuComponent itemIds={['5']} color='#000000' />
            {isMobile ? (
                <div
                    className='side-button_mobile'
                    data-test-id='sider-switch-mobile'
                    onClick={toggleCollapsed}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            ) : (
                <div
                    className='side-button_descktop'
                    data-test-id='sider-switch'
                    onClick={toggleCollapsed}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            )}
        </Sider>
    );
};
