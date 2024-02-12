import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export type ExitIconProps = {
    style?: React.CSSProperties;
};
export type collapsedType = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
