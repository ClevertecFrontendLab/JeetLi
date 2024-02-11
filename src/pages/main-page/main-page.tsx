import React from 'react';
import './main-page.css';
import img from '../../assets/img/Main-page_light.png';
import { Layout } from 'antd';

const { Content } = Layout;

import { SideBar } from '@components/side-bar/index';
import { HeaderComponent } from '@components/header';
import { FooterComponent } from '@components/footer';
import { CardComponent } from '@components/common/card-content';
import { MenuComponent } from '@components/common/nav-items';

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
                    <Content >
                        <CardComponent
                            tag='card-description'
                            tagText='card-text'
                            additionalText='С CleverFit ты сможешь: — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки; — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.'
                        />
                        <CardComponent
                            tag='card-title'
                            tagTitle='someTitle'
                            additionalTitle='CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!'
                        />
                        <div className='content-menu_wrapper'>
                            <CardComponent
                                tag='card-health'
                                tagText='card-healt_text'
                                additionalText='Расписать тренировки'
                                additionalDiv
                                content={<MenuComponent itemIds={['2']} />}
                            />
                            <CardComponent
                                tag='card-health'
                                tagText='card-calendar_text'
                                additionalText='Назначить календарь'
                                additionalDiv
                                content={<MenuComponent itemIds={['1']} />}
                            />
                            <CardComponent
                                tag='card-health'
                                tagText='card-profile_text'
                                additionalText='Заполнить профиль'
                                additionalDiv
                                content={<MenuComponent itemIds={['4']} />}
                            />
                        </div>
                        <FooterComponent />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
