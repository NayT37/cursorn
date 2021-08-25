import React from 'react';
// Components
import {DefaultButton, MainHeader, Typography, Separator} from '../../components';
import {View} from 'react-native';
// Resources
import {goToScreen, resetNavigation} from '../../navigation/controls';

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
                <DefaultButton text="Log Out" onPress={resetNavigation} />
            </View>
        </>
    );
};

export default HistoryScreen;
