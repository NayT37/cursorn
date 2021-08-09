import React, {useState} from 'react';
// Components
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
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
        <>
            <SafeAreaView />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.mainContainer}>
                    <Typography color={colors.primary} size={30} variant="bold">
                        Title
                    </Typography>
                    <Typography color={colors.primary} size={30} variant="medium">
                        Sub title
                    </Typography>
                    <Typography color={colors.white} variant="regular">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid ipsum odio? Culpa illo nobis dolore voluptate
                        quasi cum, quisquam ex blanditiis adipisci hic unde itaque doloremque ducimus? Provident, sit! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Consequatur aliquid ipsum odio? Culpa illo nobis dolore voluptate quasi cum, quisquam ex
                        blanditiis adipisci hic unde itaque doloremque ducimus? Provident, sit! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consequatur aliquid ipsum odio? Culpa illo nobis dolore voluptate quasi cum, quisquam ex blanditiis adipisci hic unde
                        itaque doloremque ducimus? Provident, sit!
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
            </ScrollView>
        </>
    );
};

/**
 * This stylesheet calculates styles ONCE and avoids re rendering
 */
const styles = StyleSheet.create({
    safeAreaViewContainer: {
        backgroundColor: colors.secondary,
    },
    scrollContainer: {
        backgroundColor: 'red',
    },
    mainContainer: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        flex: 1,
        paddingBottom: 30,
        width: '100%',
    },
});

export default App;
