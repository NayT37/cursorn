import React from 'react';
// Components
import {View} from 'react-native';
import {DefaultButton, Typography} from '../../components';
// Resources
import {goToScreen, replaceRoute} from '../../navigation/controls';
import styles from './styles';

const WelcomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Typography size={20} variant="medium">
                Welcome Screen
            </Typography>
            {/* <Separator size={15} /> */}
            <DefaultButton text="Go To Tabs" textSize={16} onPress={() => replaceRoute('TabNavigator')} />
            <DefaultButton text="Go To Experimental Screen" textSize={16} onPress={() => goToScreen('Experimental')} theme="secondary" />
        </View>
    );
};

export default WelcomeScreen;
