import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import followTwitterIcon from '../../../assets/images/followTwitterIcon.png';
import followYoutubeIcon from '../../../assets/images/followYoutubeIcon.png';
import followInstagramIcon from '../../../assets/images/followInstagramIcon.png';
import followFaceBookIcon from '../../../assets/images/followFb.png';
import {useDispatch, useSelector} from 'react-redux';
import {setFollowUsModal} from '../../store/uiSlice';

const SocialMediaModal = () => {
  const dispatch = useDispatch();
  const followUsModal = useSelector(state => state.ui.followUsModal);

  return (
    <Modal
      visible={followUsModal}
      transparent
      animationType="slide"
      onRequestClose={() => dispatch(setFollowUsModal(false))}>
      <TouchableOpacity
        onPress={() => dispatch(setFollowUsModal(false))}
        style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <View style={styles.line} />
            <Text  allowFontScaling={false}style={styles.title}>Follow Us</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setFollowUsModal(false));
                Linking.openURL('https://www.facebook.com/RajCMO/');
              }}
              style={styles.iconWrapper}>
              <Image source={followFaceBookIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(setFollowUsModal(false));
                Linking.openURL('https://www.instagram.com/rajcmo/');
              }}
              style={styles.iconWrapper}>
              <Image source={followInstagramIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(setFollowUsModal(false));
                Linking.openURL('https://x.com/RajCMO');
              }}
              style={styles.iconWrapper}>
              <Image source={followTwitterIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(setFollowUsModal(false));
                Linking.openURL('https://www.youtube.com/@cmoraj');
              }}
              style={styles.iconWrapper}>
              <Image source={followYoutubeIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default SocialMediaModal;
