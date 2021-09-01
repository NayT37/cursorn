import React from 'react';
// Components
import {DefaultButton, MainHeader, Typography, Separator} from '../../components';
import {View} from 'react-native';
// Resources
import {goToScreen, resetNavigation} from '../../navigation/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logout = async () => {
    await AsyncStorage.setItem('userLoggedInFlag', 'falsessss');
    resetNavigation();
};

const HistoryScreen = () => {
    return (
        <>
            <MainHeader title="History" hideGoBack />
            <View>
                <Typography>Hisotry Page</Typography>
                <DefaultButton
                    text="Go to experimental screen"
                    onPress={() => {
                        goToScreen('Experimental');
                    }}
                    theme="secondary"
                />
                <Separator separation={10} />
                <DefaultButton text="Log Out" onPress={logout} />
            </View>
        </>
    );
};

export default HistoryScreen;
