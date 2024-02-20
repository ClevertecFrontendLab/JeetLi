import React from 'react';

import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { useLoginMutation } from '@redux/service/user.api';

const Login: React.FC = () => {
    const [login, { isLoading, error }] = useLoginMutation();

    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        try {
            await login({
                email: values.email,
                password: values.password,
                remember: values.remember,
            }).unwrap();
            navigate('/main');
        } catch (err) {
            navigate('/result/error-login');
        }
    };

    return (
        <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name='email'
                rules={[{ required: true, message: 'Пожалуйста введите ваш Email!' }]}
            >
                <Input addonBefore='e-mail:' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
            >
                <Input.Password
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type='password'
                    placeholder='Пароль'
                />
            </Form.Item>
            <Form.Item>
                <Row>
                    <Col span={16}>
                        {' '}
                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                    </Col>{' '}
                    <a className='login-form-forgot' href=''>
                        Забыли пароль ?
                    </a>
                </Row>
            </Form.Item>
            <Form.Item>
                <Row gutter={[0, 16]}>
                    <Col span={24}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            loading={isLoading}
                            style={{ width: '100%' }}
                        >
                            Войти
                        </Button>
                    </Col>
                    <Col span={24}>
                        <Button
                            type='ghost'
                            className='login-form-button'
                            loading={isLoading}
                            style={{ width: '100%' }}
                        >
                            <GooglePlusOutlined />
                            Войти через Google
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Login;
