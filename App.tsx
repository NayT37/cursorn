import React, {useState} from 'react';
// Components
import {StyleSheet, View} from 'react-native';
import {CustomModal, DefaultButton, Typography} from './src/components';
// Resources
import {colors} from './src/utils/theme';

// This could be an option to avoid re rendering
/* const showAlert = () => {
    Alert.alert('hola!');
}; */

const App = () => {
    /*
    This will rerender the app
    const showAlert = () => {
        Alert.alert('hola!');
    };
    */

    const [IsModalVisible, setIsModalVisible] = useState(false);

    const showAlert = () => {
        setIsModalVisible(true);
    };

    const hideAlert = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={styles.mainContainer}>
            <Typography size={30} color={colors.primary}>
                Title
            </Typography>
            <DefaultButton onPress={showAlert} text="Primary" />
            <DefaultButton theme="secondary" onPress={showAlert} text="Secondary" />
            <CustomModal
                actionButtonText="Ok"
                cancelButtonText="Cancel"
                isModalVisible={IsModalVisible}
                onModalAction={hideAlert}
                onModalCancel={hideAlert}
                text="Hello World"
            />
        </View>
    );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
const styles = StyleSheet.create({
    title: {},
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
    modal: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.35)',
    },
    modalWrapper: {
        backgroundColor: colors.white,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 20,
    },
    modalButton: {
        height: 35,
    },
});

export default App;
