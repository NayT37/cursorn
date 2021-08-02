import React, {useCallback} from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/theme';

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
            return styles.txtPrimary;
        }
        if (theme === 'secondary') {
            return styles.txtSecondary;
        }
        return {}; // Always return something
    }, [theme]);

    return (
        /* style={} or style={[]} */
        <TouchableOpacity style={[styles.mainContainer, compStyle, {backgroundColor: color}, getViewStyle(theme)]} onPress={onPress}>
            {/*
                Another solution:
                styles[theme] -> This way it will look for
             */}
            <Text style={[styles.btnText, {fontSize: textSize}, getTextStyle()]}>{text}</Text>
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
