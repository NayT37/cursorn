import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Components
import {View} from 'react-native';
import {DefaultButton, Typography} from '../../components';
// Resources
import {goToScreen, replaceRoute} from '../../navigation/controls';
import styles from './styles';
import {useEffect} from 'react';

const checkIfUserIsLoggedIn = async () => {
    try {
        const value = await AsyncStorage.getItem('userLoggedInFlag');
        console.log(value);
        if (value !== null && value === 'true') {
            console.log('Yes');
            replaceRoute('TabNavigator');
        }
    } catch (error) {
        console.error('Error getting from async storage ', error);
    }
};

const WelcomeScreen = () => {
    useEffect(() => {
        checkIfUserIsLoggedIn();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Typography size={20} variant="medium">
                Welcome Screen
            </Typography>
            {/* <Separator size={15} /> */}
            <DefaultButton
                text="Go To Tabs"
                textSize={16}
                onPress={async () => {
                    try {
                        await AsyncStorage.setItem('userLoggedInFlag', 'true');
                        replaceRoute('TabNavigator');
                    } catch (error) {
                        console.error('Error storing in async storage ', error);
                    }
                }}
            />
            <DefaultButton text="Go To Experimental Screen" textSize={16} onPress={() => goToScreen('Experimental')} theme="secondary" />
        </View>
    );
};

export default WelcomeScreen;
