import React, { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useRegUserMutation } from '@redux/service/user.api';
import { useNavigate } from 'react-router-dom';
import { resError } from 'src/models/types';

const Reg: React.FC = () => {
    const [Reg, { isLoading, error }] = useRegUserMutation();
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
        setComponentDisabled(disabled);
    };
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        try {
            const result = await Reg({ email: values.email, password: values.password }).unwrap();
            console.log('Success:', result);
        } catch (err) {
            const resError = err as resError;
            if (resError.status === 409) {
                navigate('/result/error-user-exist');
                console.log(409);
            } else {
                navigate('/result/error');
                console.log('Error:', resError.message || 'Unknown error');
            }
        }
    };

    return (
        <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onValuesChange={onFormLayoutChange}
        >
            <Form.Item
                name='email'
                rules={[
                    {
                        type: 'email',
                        message: '',
                    },
                    {
                        required: true,
                        message: '',
                    },
                ]}
            >
                <Input addonBefore='e-mail:' style={{ color: '#' }} />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
                extra={
                    <p className='reg-password-desc'>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </p>
                }
            >
                <Input.Password
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type='password'
                    placeholder='Пароль'
                />
            </Form.Item>
            <Form.Item
                name='confirm'
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'Повторите ваш пароль!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type='confirmPassword'
                    placeholder='Повторите пароль'
                />
            </Form.Item>
            <Form.Item>
                <Row gutter={[0, 16]}>
                    <Col span={24}>
                        <Button
                            disabled={componentDisabled}
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
                            Регистрация через Google
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Reg;
