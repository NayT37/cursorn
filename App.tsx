/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {DefaultButton} from './src/components';
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
    }; */

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Hola</Text>
            <DefaultButton compStyle={styles.button} onPress={showAlert} text="Texto de prueba" />
            <DefaultButton color={'white'} onPress={showAlert} text="Bigger" textSize={18} />
        </View>
    );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: 'blue',
        flex: 1,
        height: 100,
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: colors.mainColor,
    },
    button: {
        width: '10%',
    },
});

export default App;
