import React from 'react';
import './footer.css';
import { Button, Layout } from 'antd';
import { CardComponent } from '@components/common/card-content';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { collapsedType } from 'src/models/types';

const { Footer } = Layout;

export const FooterComponent: React.FC<collapsedType> = ({ collapsed }) => {
    return (
        <Footer
            className={collapsed ? 'footer-layout' : 'footer-layout_collapsed footer-layout'}
            style={{ background: 'transparent' }}
        >
            <Button type='link'>Смотреть отзывы</Button>
            <CardComponent
                tag='footer-card'
                style={{ backgroundColor: '#FFF' }}
                additionalTitle='Скачать на телефон'
                tagTitle='footer-card_title'
                additionalText='Доступен в PRO-тарифе'
                additionalDiv='footer-card-button_wrapper'
                content={
                    <Button style={{ color: '#000000D9' }} type='link'>
                        <AndroidFilled />
                        Apple OS
                    </Button>
                }
                additionalContent={
                    <Button style={{ color: '#000000D9' }} type='link'>
                        <AppleFilled />
                        Android iOS
                    </Button>
                }
            />
        </Footer>
    );
};
