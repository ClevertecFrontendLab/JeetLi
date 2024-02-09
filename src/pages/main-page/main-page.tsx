import React from 'react';
import img from '../../assets/img/Main-page_light.png';
import { Layout } from 'antd';

const { Content } = Layout;

import './main-page.css';
import { SideBar } from '@components/side-bar/index';
import { HeaderComponent } from '@components/header';
import { FooterComponent } from '@components/footer';

export const MainPage: React.FC = () => {
    return (
        <>
            <Layout
                className='main-layout'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                }}
            >
                <SideBar />

                <Layout style={{ background: 'transparent' }}>
                    <HeaderComponent />
                    <Content>
                        Content
                        <FooterComponent />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
