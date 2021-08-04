import React, {useCallback} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/theme';
import Typography from '../Typography';

interface Props {
    color: string;
    compStyle?: ViewStyle;
    onPress: () => void;
    text: string;
    textSize: number;
    theme: 'primary' | 'secondary';
}

/**
 * Get button selected theme and returns an style object with proper styling
 * @param selectedTheme
 * @returns style object
 */
const getViewStyle = (selectedTheme: string) => {
    if (selectedTheme === 'primary') {
        return styles.btnPrimary;
    }
    if (selectedTheme === 'secondary') {
        return styles.btnSecondary;
    }
    // Because of good practices, always return something with the same return type
    return {}; // Always return something
};

const DefaultButton = ({color, compStyle, onPress, text, textSize, theme}: Props) => {
    /**
     * Remember good practices for function naming
     * @returns object
     */
    const getTextStyle = useCallback(() => {
        if (theme === 'primary') {
            return colors.white;
        }
        if (theme === 'secondary') {
            return colors.primary;
        }
        return colors.black; // Always return something
    }, [theme]);

    return (
        /* style={} or style={[]} */
        <TouchableOpacity style={[styles.mainContainer, compStyle, {backgroundColor: color}, getViewStyle(theme)]} onPress={onPress}>
            {/*
                Another solution:
                styles[theme] -> This way it will look for
             */}
            <Typography align="center" size={textSize} color={getTextStyle()}>
                {text}
            </Typography>
        </TouchableOpacity>
    );
};

// This way a default property value should be setted
DefaultButton.defaultProps = {
    color: colors.primary,
    compStyle: {},
    textSize: 14,
    theme: 'primary',
};

export default DefaultButton;
