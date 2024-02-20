import React, { useState } from 'react';
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
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout className='main-layout'>
                <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Layout
                    style={{
                        background: ` no-repeat center/cover url(${img})`,
                    }}
                >
                    <HeaderComponent />
                    <Content className='content-layout'>
                        <CardComponent
                            tag='card-description'
                            additionalUl={
                                <ul>
                                    <li>С CleverFit ты сможешь: </li>
                                    <li>
                                        — планировать свои тренировки на календаре, выбирая тип и
                                        уровень нагрузки;
                                    </li>
                                    <li>
                                        — отслеживать свои достижения в разделе статистики,
                                        сравнивая свои результаты c нормами и рекордами;
                                    </li>
                                    <li>
                                        — создавать свой профиль, где ты можешь загружать свои фото,
                                        видео и отзывы o тренировках;
                                    </li>
                                    <li>
                                        — выполнять расписанные тренировки для разных частей тела,
                                        следуя подробным инструкциям и советам профессиональных
                                        тренеров.
                                    </li>
                                </ul>
                            }
                        />
                        <CardComponent
                            tag='card-title'
                            tagTitle='someTitle'
                            additionalTitle='CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!'
                        />
                        <div className='content-menu_wrapper'>
                            <CardComponent
                                tag='card-item'
                                tagText='card-item_text'
                                additionalText='Расписать тренировки'
                                additionalDiv='card-item-layout'
                                content={<MenuComponent itemIds={['2']} color='#2F54EB' />}
                            />
                            <CardComponent
                                tag='card-item'
                                tagText='card-item_text'
                                additionalText='Назначить календарь'
                                additionalDiv='card-item-layout'
                                content={<MenuComponent itemIds={['1']} color='#2F54EB' />}
                            />
                            <CardComponent
                                tag='card-item'
                                tagText='card-item_text'
                                additionalText='Заполнить профиль'
                                additionalDiv='card-item-layout'
                                content={<MenuComponent itemIds={['4']} color='#2F54EB' />}
                            />
                        </div>
                    </Content>
                    <FooterComponent collapsed={collapsed} setCollapsed={setCollapsed} />
                </Layout>
            </Layout>
        </>
    );
};
