import React, {ReactNode} from 'react';
// Components
import {Text} from 'react-native';
// Resources
import {colors} from '../../../utils/theme';
import {IS_ANDROID} from '../../../utils/constants';

const typographyVariant = {
    bold: IS_ANDROID ? 'Raleway-Bold' : 'Raleway Italic',
    italic: IS_ANDROID ? 'Raleway-Italic' : 'Raleway Italic',
    medium: IS_ANDROID ? 'Raleway-Medium' : 'Raleway Italic',
    regular: IS_ANDROID ? 'Raleway-Regular' : 'Raleway Italic',
};

interface Props {
    children: ReactNode;
    align?: 'left' | 'center' | 'right' | 'justify';
    color?: string;
    size?: number;
    variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({align, color, size, variant = 'regular'}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
    const textStyle = {
        color,
        fontSize: size,
        textAlign: align,
        fontFamily: typographyVariant[variant],
    };
    return textStyle;
};

const Typography = ({children, align, color, size, variant}: Props) => {
    const textStyle = getTextStyle({align, color, size, variant});
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
    variant: 'regular',
};

export default Typography;
