import React from 'react';
// Components
import {Typography} from '../../components';
import {View} from 'react-native';
// Resources
import styles from './styles';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Typography>Home Page</Typography>
        </View>
    );
};

export default HomeScreen;
