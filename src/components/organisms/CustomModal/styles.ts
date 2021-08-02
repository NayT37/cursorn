import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
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
    modalText: {
        marginVertical: 20,
    },
});

export default styles;
