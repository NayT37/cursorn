import React, {useState} from 'react';
// Components
import {SafeAreaView, ScrollView, View} from 'react-native';
import {CustomModal, DefaultButton, Separator, Typography} from '../../components';
// Resources
import {colors} from '../../utils/theme';
import styles from './styles';

// This could be an option to avoid re rendering
/* const showAlert = () => {
    Alert.alert('hola!');
}; */

const ExperimentalScreen = () => {
    /*
    This will rerender the app
    const showAlert = () => {
        Alert.alert('hola!');
    };
    */

    // TODO: Remove margins top and bottom and replace with separator
    // TODO: Implement isHorizonal for separator

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
                    <Separator separation={50} />
                    <Typography color={colors.white} variant="regular">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui officia mollitia similique odio recusandae fugit
                        voluptatum? Deleniti neque minus dolores? Saepe distinctio perspiciatis totam quo consequatur eaque excepturi iusto.
                    </Typography>
                    <Separator separation={50} />
                    <DefaultButton onPress={showAlert} text="Primary" />
                    <Separator separation={25} />
                    <DefaultButton theme="secondary" onPress={showAlert} text="Secondary" />
                    <CustomModal
                        cancelButtonText="Cancel"
                        onModalCancel={hideAlert}
                        isModalVisible={IsModalVisible}
                        actionButtonText="Ok"
                        onModalAction={hideAlert}
                        text="Hello World"
                    />
                </View>
            </ScrollView>
        </>
    );
};

export default ExperimentalScreen;
