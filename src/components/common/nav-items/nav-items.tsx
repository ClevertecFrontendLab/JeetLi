import React from 'react';
import { Menu } from 'antd';
import { MenuItem } from '../../../models/types';
import { getMenuItems } from './menUtils';

interface MenuComponentProps {
    itemIds: string[];
}

export const MenuComponent: React.FC<MenuComponentProps> = ({ itemIds }) => {
    const items: MenuItem[] = getMenuItems(itemIds);

    return (
        <Menu
            defaultSelectedKeys={[]}
            defaultOpenKeys={['']}
            mode='inline'
            theme='light'
            items={items}
        />
    );
};
