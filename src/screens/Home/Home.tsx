import React, {useEffect, useState} from 'react';
// Components
import {MainHeader, Typography, DefaultButton, Separator} from '../../components';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
// Resources
import styles from './styles';
import {getAllBooks} from '../../services';
import {goToScreen} from '../../navigation/controls';
import {useNetInfo} from '@react-native-community/netinfo';
import {colors} from '../../utils/theme';

const goToExperimentalScreen = () => {
    goToScreen('Experimental');
};
const ListItem = ({title}: {title: string}) => {
    return (
        <View style={styles.flatListContainer}>
            <Typography>{title}</Typography>
        </View>
    );
};

const renderFlatListItem = ({item}: {item: any}) => <ListItem title={item.title} />;

const HomeScreen = () => {
    const [Books, setBooks] = useState([]);
    const [Loading, setLoading] = useState(true);
    const netInfo = useNetInfo();

    // dis from dispatch
    const getBooksData = async () => {
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
        } finally {
            setLoading(false);
        }
    };

    /**
     * Called each time component renders
     * Do not receive async functions
     */
    useEffect(() => {
        getBooksData();
    }, []);

    if (!netInfo.isConnected) {
        return (
            <View>
                <Typography>No tienes internet :(</Typography>
            </View>
        );
    }

    return (
        <>
            <MainHeader title="Home" hideGoBack />
            <View style={styles.mainContainer}>
                <Typography>Home Page</Typography>
                <Separator separation={16} />
                <DefaultButton text="Go to experimental screen" onPress={goToExperimentalScreen} />
                <Separator separation={16} />
                <Typography>Is Connected? {netInfo.isConnected?.toString()}</Typography>
                <Separator separation={16} />
                <FlatList data={Books} renderItem={renderFlatListItem} refreshing={Loading} onRefresh={getBooksData} />
                {Loading ? (
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : null}
            </View>
        </>
    );
};

export default HomeScreen;
