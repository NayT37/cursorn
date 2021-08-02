import React from 'react';
// Components
import {Modal, Text, View} from 'react-native';
import {DefaultButton} from '../../../components';
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
                    <Text style={styles.modalText}>{text}</Text>
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
