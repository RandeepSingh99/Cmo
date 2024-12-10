import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';

/// grant permission in android
export const getDownloadPermissionAndroid = async () => {
  try {
    const granted = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    console.log('granted', granted);
    if (granted === PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE) return true;
  } catch (err) {
    console.log('err', err);
  }
};

export const downloadFile = async url => {
  // Get the app's cache directory
  const {config, fs} = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  // Generate a unique filename for the downloaded image
  const filename = url.split('/').pop();
  const imagePath = `${cacheDir}/${filename}`;

  try {
    // Download the file and save it to the cache directory
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: imagePath,
        appendExt: filename.split('.').pop(),
      },
      android: {
        fileCache: true,
        path: imagePath,
        appendExt: filename.split('.').pop(),
        addAndroidDownloads: {
          // Related to the Android only
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: 'File',
        },
      },
    });

    const response = await RNFetchBlob.config(configOptions).fetch('GET', url);

    // Return the path to the downloaded file
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
