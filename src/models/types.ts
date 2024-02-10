import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export type ExitIconProps = {
    style?: React.CSSProperties;
};