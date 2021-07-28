import React from 'react';
// Components
import {Alert, StyleSheet, View} from 'react-native';
import {DefaultButton} from './src/components';
// Resources
import {colors} from './src/utils/theme';

// This could be an option to avoid re rendering
const showAlert = () => {
    Alert.alert('hola!');
};

const App = () => {
    /*
    This will rerender the app
    const showAlert = () => {
        Alert.alert('hola!');
    };
    */

    return (
        <View style={styles.mainContainer}>
            <DefaultButton onPress={showAlert} text="Primary" />
            <DefaultButton theme="secondary" onPress={showAlert} text="Secondary" />
        </View>
    );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        flex: 1,
        height: 100,
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        width: '10%',
    },
});

export default App;
