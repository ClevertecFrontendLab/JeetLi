import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export type ExitIconProps = {
    style?: React.CSSProperties;
};
export type collapsedType = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
export type UserState = {
    jwt?: string;
};
export type User = {
    id: number;
    username: string;
    email: string;
    provader: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    phone: string;
    password?: string;
};

export type UserRegistration = {
    email: string;
    password: string;
};

export type UserWithToken = {
    accessToken: string;
    jwt: string;
    user: User;
};

export type UserAutarization = {
    email: string;
    password: string;
    remember: boolean;
};

export type Error = {
    status: number;
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details: Record<string, any>;
    };
};

export type ResultProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    button: string;
    navButton: string;
};
export type resError = {
    status: number;
    error: 'string';
    message: 'string';
};
