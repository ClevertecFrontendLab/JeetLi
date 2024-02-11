import React from 'react';
import { Menu } from 'antd';
import { MenuItem } from '../../../models/types';
import { getMenuItems } from './menUtils';

import { MenuComponentProps } from 'src/models/interface';

export const MenuComponent: React.FC<MenuComponentProps> = ({ itemIds, color }) => {
    const items: MenuItem[] = getMenuItems(itemIds, color);

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
