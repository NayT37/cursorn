import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/theme';

interface Props {
    onPress: () => void;
    text: string;
    compStyle?: ViewStyle;
    color: string;
    textSize: number;
}

const DefaultButton = ({compStyle, color, onPress, text, textSize}: Props) => {
    return (
        /* style={} or style={[]} */
        <TouchableOpacity style={[styles.mainContainer, compStyle, {backgroundColor: color}]} onPress={onPress}>
            <Text style={[styles.btnText, {fontSize: textSize}]}>{text}</Text>
        </TouchableOpacity>
    );
};

// This way a default property value should be setted
DefaultButton.defaultProps = {
    compStyle: {},
    color: colors.mainColor,
    textSize: 14,
};

export default DefaultButton;
