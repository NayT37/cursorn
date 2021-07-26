import React from 'react';
import {Alert, Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from './src/utils/theme';
import styles from './styles';

interface Props {
    onPress: () => void;
}

const DefaultButton = ({onPress}: Props) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Text style={styles.btnText}>Custom Text</Text>
        </TouchableOpacity>
    );
};

export default DefaultButton;
