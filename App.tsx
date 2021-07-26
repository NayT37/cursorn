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
import {Alert, Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
            <Button
                title="button"
                onPress={() => {
                    console.log('holiwis');
                }}
            />
            <DefaultButton onPress={showAlert} />
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
});

export default App;
