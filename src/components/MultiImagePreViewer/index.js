import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {appColors} from '../../utils/constants/colors';
import {fixUrl} from '../../utils';
import {boothImgUri} from '../../utils/constants/uri';
import {scaledValue} from '../../utils/designUtils';
import Spacer from '../Spacer';
import {
  downloadFile,
  getDownloadPermissionAndroid,
} from '../../storage/downloadFiles';
import RNFetchBlob from 'rn-fetch-blob';

const {width, height} = Dimensions.get('window');

const MultiImagePreViewer = props => {
  const imgRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handlePreviewSelect = index => {
    imgRef.current.scrollToIndex({index, animated: false});
    setSelectedIndex(index);
  };

  const onDownload = () => {
    props.closeModal();
    const fileUrl =boothImgUri + fixUrl(props?.data[selectedIndex]);
    console.log('fileUrl', fileUrl)
    // return
    if (Platform.OS === 'android') {
      getDownloadPermissionAndroid().then(granted => {
        console.log('granted', granted)
        // if (granted) {
          downloadFile(fileUrl);
        // }
      });
    } else {
      downloadFile(fileUrl).then(res => {
        console.log('res', res.path())
        RNFetchBlob.ios.previewDocument(res.path());
      });
    }
  };
  // Handle when the visible image changes on scroll (swiping)
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      if (currentIndex !== selectedIndex) {
        setSelectedIndex(currentIndex);
      }
      if (currentIndex === 0 && selectedIndex === 0) {
        setSelectedIndex(0);
      }
    }
  }).current;

  // Reset the scroll position to the first index when the modal opens
  useEffect(() => {
    if (props.visible) {
      setSelectedIndex(0);
      imgRef.current.scrollToIndex({index: 0, animated: false});
    }
  }, [props.visible]);

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      onRequestClose={props.closeModal}>
      <View style={styles.modalContainer}>
        {/* <TouchableOpacity style={styles.closeButton} onPress={props.closeModal}>
          <Text allowFontScaling={false} style={styles.closeButtonText}>
            Close
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.closeButton} onPress={onDownload}>
          <Text allowFontScaling={false} style={styles.closeButtonText}>
            Download
          </Text>
        </TouchableOpacity>

        <FlatList
          data={props?.data}
          horizontal
          ref={imgRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: boothImgUri + fixUrl(item),
                }}
                style={styles.fullImage}
              />
            </View>
          )}
          // Scroll to the selected index to sync with the main image
          initialScrollIndex={selectedIndex}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
        />

        <FlatList
          data={props?.data}
          horizontal
          style={styles.smallPreviewer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => handlePreviewSelect(index)}>
              <Image
                source={{
                  uri: boothImgUri + fixUrl(item),
                }}
                style={[
                  styles.smallImage,
                  selectedIndex === index && styles.selectedImage,
                ]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default MultiImagePreViewer;

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
  imageContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  smallImage: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: appColors.white,
  },
  smallPreviewer: {position: 'absolute', bottom: scaledValue(12)},
});
