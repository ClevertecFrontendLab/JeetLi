import { ExitIcon } from '@components/ui/graphics';
import { MenuItem } from '../../../models/types';

import { CalendarTwoTone, HeartFilled, ProfileOutlined, TrophyFilled } from '@ant-design/icons';

export const getMenuItems = (itemIds: string[]): MenuItem[] => {
    const allItems: MenuItem[] = [
        { key: 1, label: 'Календарь', icon: <CalendarTwoTone twoToneColor='#061178' /> },
        { key: 2, label: 'Тренировки', icon: <HeartFilled style={{ color: '#061178' }} /> },
        { key: 3, label: 'Достижения', icon: <TrophyFilled style={{ color: '#061178' }} /> },
        { key: 4, label: 'Профиль', icon: <ProfileOutlined style={{ color: '#061178' }} /> },
        {
            key: 5,
            label: 'Выход',
            icon: (
                <ExitIcon
                    style={{ borderTop: ' 1px solid rgb(240, 240, 240)', position: 'relative' }}
                />
            ),
        },
    ];

    const selectedItems = allItems.filter(
        (item) => item?.key && itemIds.includes(item.key.toString()),
    );

    return selectedItems;
};
