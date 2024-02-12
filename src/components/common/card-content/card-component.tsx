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
    additionalUl,
}) => {
    return (
        <article style={style} className={tag}>
            {additionalUl && <article>{additionalUl}</article>}
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
                <div className={additionalDiv}>
                    {content}
                    {additionalContent}
                </div>
            )}
        </article>
    );
};
