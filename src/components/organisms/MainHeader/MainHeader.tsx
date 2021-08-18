import React from 'react';
// Components
import {Pressable, View} from 'react-native';
import Typography from '../../atoms/Typography';
// Resources
import {goBack} from '../../../navigation/controls';
import styles from './styles';

interface Props {
    hideGoBack: boolean;
    title: string;
}

const MainHeader = ({hideGoBack, title}: Props) => {
    return (
        <View style={styles.container}>
            {!hideGoBack && (
                <Pressable onPress={goBack} style={styles.goBack}>
                    <Typography>Back</Typography>
                </Pressable>
            )}

            <Typography variant="bold" size={20}>
                {title}
            </Typography>
        </View>
    );
};

MainHeader.defaultProps = {
    title: 'Header',
    hideGoBack: false,
};

export default MainHeader;
