import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/constants/colors';

const SingleImageViewer = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      onRequestClose={props.closeModal}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={props.closeModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Image
          source={{uri: props.selectedImage}}
          style={styles.fullImage}
        />
      </View>
    </Modal>
  );
};

export default SingleImageViewer;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: appColors.white,
    fontWeight: 'bold',
  },
  fullImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});
