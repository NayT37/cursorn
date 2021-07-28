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

const DefaultButton = ({color, compStyle, onPress, text, textSize, theme}: Props) => {
    const viewStyle = () => {
        if (theme === 'primary') {
            return styles.btnPrimary;
        }
        if (theme === 'secondary') {
            return styles.btnSecondary;
        }
    };

    const viewText = useCallback(() => {
        if (theme === 'primary') {
            return styles.txtPrimary;
        }
        if (theme === 'secondary') {
            return styles.txtSecondary;
        }
    }, [theme]);

    return (
        /* style={} or style={[]} */
        <TouchableOpacity style={[styles.mainContainer, compStyle, {backgroundColor: color}, viewStyle()]} onPress={onPress}>
            <Text style={[styles.btnText, {fontSize: textSize}, viewText()]}>{text}</Text>
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
