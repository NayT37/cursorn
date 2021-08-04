import React, {ReactNode} from 'react';
// Components
import {Text} from 'react-native';
// Resources
import {colors} from '../../utils/theme';

interface Props {
    children: ReactNode;
    align?: 'left' | 'center' | 'right' | 'justify';
    color?: string;
    size?: number;
}

const getTextStyle = ({align, color, size}: Pick<Props, 'align' | 'color' | 'size'>) => {
    const textStyle = {
        color,
        fontSize: size,
        textAlign: align,
    };
    return textStyle;
};

const Typography = ({children, align, color, size}: Props) => {
    const textStyle = getTextStyle({align, color, size});
    return (
        <Text allowFontScaling={false} style={textStyle}>
            {children}
        </Text>
    );
};

Typography.defaulProps = {
    align: 'left',
    color: colors.black,
    size: 18,
};

export default Typography;
