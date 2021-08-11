import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
    separation: number;
}

/**
 * Component to create separation between items
 * @param separation
 * @returns View
 */
const Separator = ({separation}: Props) => {
    return <View style={[styles.separator, {height: separation}]} />;
};

export default Separator;
