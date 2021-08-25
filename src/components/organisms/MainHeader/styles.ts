import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        position: 'relative',
        width: '100%',
    },
    goBack: {
        left: 10,
        position: 'absolute',
    },
});

export default styles;
