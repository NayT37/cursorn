import React from 'react';
// Components
import {MainHeader, Typography, DefaultButton} from '../../components';
import {View} from 'react-native';
// Resources
import styles from './styles';
import {goToScreen} from '../../navigation/controls';

const goToExperimentalScreen = () => {
    goToScreen('Experimental');
};

const HomeScreen = () => {
    return (
        <>
            <MainHeader title="Home" hideGoBack />
            <View style={styles.mainContainer}>
                <Typography>Home Page</Typography>
                <DefaultButton text="Go to experimental screen" onPress={goToExperimentalScreen} />
            </View>
        </>
    );
};

export default HomeScreen;
