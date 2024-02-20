import React, { useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useRegUserMutation } from '@redux/service/user.api';
import { setLoading, clearLoading } from '@redux/slice/loading-slice';
import { useNavigate } from 'react-router-dom';
import { resError } from 'src/models/types';
import { useForm } from 'antd/lib/form/Form';
import { useDispatch } from 'react-redux';

const Reg: React.FC = () => {
    const [Reg, { isLoading }] = useRegUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values: any) => {
        dispatch(setLoading());
        try {
            await Reg({ email: values.email, password: values.password }).unwrap();
        } catch (err) {
            const resError = err as resError;
            if (resError.status === 409) {
                navigate('/result/error-user-exist');
            } else {
                navigate('/result/error');
            }
        } finally {
            dispatch(clearLoading());
        }
    };

    const [form] = useForm();
    const [disabledSave, setDisabledSave] = useState(true);

    const handleFormChange = () => {
        const formErrors = form.getFieldsError();
        const hasErrors = formErrors.some(({ errors }) => errors.length > 0);
        const fieldsTouchedAndNotEmpty =
            form.isFieldTouched('email') &&
            form.getFieldValue('email') &&
            form.isFieldTouched('password') &&
            form.getFieldValue('password') &&
            form.isFieldTouched('confirm') &&
            form.getFieldValue('confirm');
        setDisabledSave(hasErrors || !fieldsTouchedAndNotEmpty);
    };

    return (
        <Form
            form={form}
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFieldsChange={handleFormChange}
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
                help={
                    <p className='reg-password-desc'>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </p>
                }
                rules={[
                    {
                        required: true,
                        message: (
                            <p className='reg-password-desc'>
                                Пароль не менее 8 символов, с заглавной буквой и цифрой
                            </p>
                        ),

                        validator(rule, value, callback) {
                            const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                            rule;
                            if (!value) {
                                callback('');
                            } else if (!passwordRegex.test(value)) {
                                callback('');
                            } else {
                                callback();
                            }
                        },
                    },
                ]}
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
                            disabled={disabledSave}
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
