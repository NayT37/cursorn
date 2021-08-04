import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        width: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnText: {
        alignSelf: 'center',
    },
    btnPrimary: {
        backgroundColor: colors.primary,
    },
    txtPrimary: {
        color: colors.white,
    },
    btnSecondary: {
        backgroundColor: colors.white,
    },
    txtSecondary: {
        color: colors.primary,
    },
});

export default styles;
