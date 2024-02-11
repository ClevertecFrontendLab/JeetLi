import { Typography } from 'antd/lib';
import { CardProps } from 'src/models/interface';
const { Title, Text } = Typography;

import React from 'react';

export const CardComponent: React.FC<CardProps> = ({
    tag,
    tagTitle,
    tagText,
    additionalTitle,
    additionalText,
    additionalDiv,
    content,
    additionalContent,
    style,
}) => {
    return (
        <article style={style} className={tag}>
            {additionalTitle && (
                <Title style={style} className={tagTitle}>
                    {additionalTitle}
                </Title>
            )}
            {additionalText && (
                <Text style={style} className={tagText}>
                    {additionalText}
                </Text>
            )}
            {additionalDiv && (
                <div>
                    {content}
                    {additionalContent}
                </div>
            )}
        </article>
    );
};
