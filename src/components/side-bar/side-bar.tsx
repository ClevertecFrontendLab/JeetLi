import {
    CalendarTwoTone,
    HeartFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProfileOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { CleverfitLogo, FitLogo, ExitIcon } from '../ui/graphics';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './side-bar.css';
import { Layout } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode | string,
    children?: MenuItem[],
    type?: 'group',
    style?: React.CSSProperties,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        style,
    } as MenuItem;
}

const { Sider } = Layout;

const items: MenuItem[] = [
    getItem('Календарь', '1', <CalendarTwoTone twoToneColor='#061178' />),
    getItem('Тренировки', '2', <HeartFilled style={{ color: '#061178' }} />),
    getItem('Достижения', '3', <TrophyFilled style={{ color: '#061178' }} />),
    getItem('Профиль', '4', <ProfileOutlined style={{ color: '#061178' }} />),
];
const exitItem: MenuItem[] = [
    getItem('Выход', '5', <ExitIcon />, undefined, undefined, {
        borderTop: ' 1px solid rgb(240, 240, 240)',
        position: 'relative',
    }),
];

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
            console.log(isMobile);
        };
    }, []);

    return (
        <Sider
            width={isMobile ? 106 : 200}
            collapsedWidth={isMobile && collapsed ? 0 : 64}
            style={{
                height: '100%',
                position: 'fixed',
            }}
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
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode='inline'
                    theme='light'
                    items={items}
                />
            </div>
            <Menu mode='inline' theme='light' items={exitItem} />
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
