import { Typography } from 'antd/lib';

const { Title, Text } = Typography;

import React from 'react';

interface CardProps {
    tag: string;
    tagTitle?: string;
    tagText?: string;
    additionalTitle?: string;
    additionalText?: string;
    title?: string;
    text?: string;
    additionalDiv?: boolean;
}

export const CardComponent: React.FC<CardProps> = ({
    tag,
    tagTitle,
    tagText,
    additionalTitle,
    additionalText,
    additionalDiv,
}) => {
    return (
        <article className={tag}>
            {additionalTitle && <Title className={tagTitle}>{additionalTitle}</Title>}
            {additionalText && <Text className={tagText}>{additionalText}</Text>}
            {additionalDiv && <div>{additionalDiv}</div>}
        </article>
    );
};
