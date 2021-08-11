import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

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

export default styles;
