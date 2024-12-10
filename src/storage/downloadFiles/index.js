import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, Platform} from 'react-native';

export const getDownloadPermissionAndroid = async () => {
  try {
    if (Number(Platform.Version) >= 33) {
      return true;
    }
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    console.log('hasPermission', hasPermission)
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    console.log('status', status)
    return status === 'granted';
  } catch (err) {
    console.log('err', err);
  }
};

export const downloadFile = async url => {
  const {config, fs} = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;
  const filename = url.split('/').pop();
  const imagePath = `${cacheDir}/${filename}`;

  try {
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
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: 'File',
        },
      },
    });

    const response = await RNFetchBlob.config(configOptions).fetch('GET', url);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
