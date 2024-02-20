import { Button, Layout } from 'antd';
import './result.css';
const { Content } = Layout;
import img from '../../assets/img/Enter-page_light.png';
import { ResultProps } from '../../models/types';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Result = ({ icon, title, text, button, navButton }: ResultProps) => {
    const navigate = useNavigate();
    return (
        <>
            <Layout
                className='result-layout'
                style={{
                    background: `no-repeat center/cover url(${img})`,
                }}
            >
                <Content className='result-layout_wrapper' style={{ backgroundColor: '#fff' }}>
                    <div className='result-content'>
                        <div>{icon}</div>
                        <div style={{ textAlign: 'center', margin: '24px 0' }}>
                            <Typography.Title
                                style={{ margin: 0, fontSize: 24 }}
                                className='result-content-title'
                            >
                                {title}
                            </Typography.Title>
                            <Typography.Text
                                style={{ color: 'rgb(140, 140, 140)' }}
                                className='result-content-text'
                            >
                                {text}
                            </Typography.Text>
                        </div>
                        <Button
                            className='result-content-button'
                            onClick={() => navigate(navButton)}
                            style={{ width: '100%' }}
                            type='primary'
                        >
                            {button}
                        </Button>
                    </div>
                </Content>
            </Layout>
        </>
    );
};
