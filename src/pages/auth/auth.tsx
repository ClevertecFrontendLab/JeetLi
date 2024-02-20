import React from 'react';
import './auth.css';
import { Layout } from 'antd';
import img from '../../assets/img/Enter-page_light.png';
import { CleverfitLogo } from '@components/ui/graphics';
import { Tabs } from 'antd';
import Login from '@components/login/login';
import Reg from '@components/login/reg';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import Lottie from 'react-lottie';
import loader from '../../assets/animations/loader.json';
const { Content } = Layout;

export const Auth: React.FC = () => {
    const isLoading = useAppSelector((state) => state.loading.isLoading);

    const onChange = (key: string) => {};
    const lable = () => {
        return <div className='auth-content-form_lable'>Вход</div>;
    };
    const lable2 = () => {
        return <div className='auth-content-form_lable'>Регистрация</div>;
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    if (isLoading) {
        console.log('Displaying loader');
        return (
            <>
                <Lottie
                    options={defaultOptions}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 10,
                        background: '#799CD580',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    height={'100%'}
                    width={'100%'}
                />
                <Layout
                    className='auth-layout'
                    style={{
                        background: ` no-repeat center/cover url(${img})`,
                    }}
                >
                    {' '}
                    <Content className='auth-content_wrapper' style={{ backgroundColor: '#fff' }}>
                        <div className='auth-content-logo'>
                            <CleverfitLogo />
                        </div>
                        <div className='auth-content-form_wrapper'>
                            <Tabs
                                defaultActiveKey='1'
                                onChange={onChange}
                                size='large'
                                tabBarStyle={{ width: '368px' }}
                                className='auth-content-tabs'
                                items={[
                                    {
                                        label: lable(),
                                        key: '1',
                                        children: <Login />,
                                    },
                                    {
                                        label: lable2(),
                                        key: '2',
                                        children: <Reg />,
                                    },
                                ]}
                            />
                        </div>
                    </Content>
                </Layout>
            </>
        );
    }
    return (
        <>
            <Layout
                className='auth-layout'
                style={{
                    background: ` no-repeat center/cover url(${img})`,
                }}
            >
                {' '}
                <Content className='auth-content_wrapper' style={{ backgroundColor: '#fff' }}>
                    <div className='auth-content-logo'>
                        <CleverfitLogo />
                    </div>
                    <div className='auth-content-form_wrapper'>
                        <Tabs
                            defaultActiveKey='1'
                            onChange={onChange}
                            size='large'
                            tabBarStyle={{ width: '368px' }}
                            className='auth-content-tabs'
                            items={[
                                {
                                    label: lable(),
                                    key: '1',
                                    children: <Login />,
                                },
                                {
                                    label: lable2(),
                                    key: '2',
                                    children: <Reg />,
                                },
                            ]}
                        />
                    </div>
                </Content>
            </Layout>
        </>
    );
};
