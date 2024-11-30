import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import InterText from './InterText';

interface DeleteClientModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  clientName: string;
}

const DeleteClientModal: React.FC<DeleteClientModalProps> = ({
  visible,
  onClose,
  onConfirm,
  clientName,
}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <InterText weight="bold" style={styles.modalTitle}>
            Excluir cliente:
          </InterText>
          <InterText style={styles.modalMessage}>
            Tem certeza que deseja excluir o cliente {clientName}?
          </InterText>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <InterText style={styles.buttonText} weight="bold">
                Excluir cliente
              </InterText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <InterText style={styles.buttonText}>Cancelar</InterText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    maxWidth: 270,
    backgroundColor: 'rgba(37, 37, 37, 0.82)',
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 5,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  modalMessage: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    minWidth: '100%',
  },
  confirmButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    minWidth: '100%',
    alignItems: 'center',
    color: '#0A84FF',
    height: 44,
    borderTopWidth: 1,
    borderTopColor: 'rgba(84, 84, 88, 0.651)',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    minWidth: '100%',
    alignItems: 'center',
    height: 44,
    borderTopWidth: 1,
    borderTopColor: 'rgba(84, 84, 88, 0.651)',
  },
  buttonText: {
    color: '#0A84FF',
    fontSize: 17,
  },
});

export default DeleteClientModal;
