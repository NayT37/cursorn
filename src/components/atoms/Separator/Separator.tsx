import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
    separation: number;
}

const Separator = ({separation}: Props) => {
    return <View style={[styles.separator, {height: separation}]} />;
};

export default Separator;
