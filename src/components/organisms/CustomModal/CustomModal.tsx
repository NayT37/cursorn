import React from 'react';
// Components
import {Modal, View} from 'react-native';
import {DefaultButton} from '../../../components';
import Typography from '../../Typography';
// Resources
import styles from './styles';

interface Props {
    actionButtonText: string;
    cancelButtonText?: string;
    isModalVisible: boolean;
    onModalAction: () => void;
    onModalCancel?: () => void;
    text: string;
}

const CustomModal = ({actionButtonText, isModalVisible, cancelButtonText, onModalAction, onModalCancel, text}: Props) => {
    return (
        <Modal visible={isModalVisible} transparent animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalWrapper}>
                    <View style={styles.modalText}>
                        <Typography>{text}</Typography>
                    </View>
                    <DefaultButton onPress={onModalAction} text={actionButtonText} compStyle={styles.modalButton} textSize={18} />
                    {cancelButtonText && onModalCancel ? (
                        <DefaultButton
                            onPress={onModalCancel}
                            text={cancelButtonText}
                            compStyle={styles.modalButton}
                            textSize={18}
                            theme="secondary"
                        />
                    ) : null}
                </View>
            </View>
        </Modal>
    );
};

CustomModal.defaultProps = {
    cancelButtonText: null,
    onModalCancel: () => {},
};

export default CustomModal;
