import React from 'react';
// Components
import {DefaultButton, MainHeader, Typography} from '../../components';
import {View} from 'react-native';
// Resources
import {resetNavigation} from '../../navigation/controls';

const HistoryScreen = () => {
    return (
        <>
            <MainHeader title="History" hideGoBack />
            <View>
                <Typography>Hisotry Page</Typography>
                <DefaultButton text="Log Out" onPress={resetNavigation} />
            </View>
        </>
    );
};

export default HistoryScreen;
