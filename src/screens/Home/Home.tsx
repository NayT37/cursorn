import React, {useEffect, useState} from 'react';
// Components
import {MainHeader, Typography, DefaultButton} from '../../components';
import {Alert, View} from 'react-native';
// Resources
import styles from './styles';
import {getAllBooks} from '../../services';
import {goToScreen} from '../../navigation/controls';

const goToExperimentalScreen = () => {
    goToScreen('Experimental');
};

const HomeScreen = () => {
    const [Books, setBooks] = useState([]);

    /**
     * Called each time component renders
     * Do not receive async functions
     */
    useEffect(() => {
        // dis from dispatch
        const dis = async () => {
            try {
                const {success, data} = await getAllBooks();
                if (success) {
                    setBooks(data);
                } else {
                    Alert.alert('error getting books on Home screen');
                }
            } catch (error) {
                console.error(error);
                Alert.alert('error getting books on Home screen');
            }
        };
        dis();
    }, []);

    return (
        <>
            <MainHeader title="Home" hideGoBack />
            <View style={styles.mainContainer}>
                <Typography>Home Page</Typography>
                <DefaultButton text="Go to experimental screen" onPress={goToExperimentalScreen} />
                <Typography>{JSON.stringify(Books, null, 2)}</Typography>
            </View>
        </>
    );
};

export default HomeScreen;
