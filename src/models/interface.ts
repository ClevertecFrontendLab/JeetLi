export interface CardProps {
    tag: string;
    tagTitle?: string;
    tagText?: string;
    additionalTitle?: string;
    additionalText?: string;
    title?: string;
    text?: string;
    additionalDiv?: boolean;
    content?: string | React.ReactNode;
    additionalContent?: string;
    style?: React.CSSProperties;
    additionalUl?: React.ReactNode;
}
export interface MenuComponentProps {
    itemIds: string[];
    color: string;
}