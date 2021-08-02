import React from 'react';
// Components
import {Modal, Text, View} from 'react-native';
import {DefaultButton} from '../../../components';
// Resources
import styles from './styles';

interface Props {
    isModalVisible: boolean;
    onModalAction: () => void;
    text: string;
    actionButtonText: string;
}

const CustomModal = ({actionButtonText, isModalVisible, onModalAction, text}: Props) => {
    return (
        <Modal visible={isModalVisible} transparent animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalWrapper}>
                    <Text style={styles.modalText}>{text}</Text>
                    <DefaultButton onPress={onModalAction} text={actionButtonText} compStyle={styles.modalButton} textSize={18} />
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
