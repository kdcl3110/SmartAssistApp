import RNFetchBlob from 'rn-fetch-blob';
import {Alert, PermissionsAndroid } from 'react-native';

export const dowloadPDF = (url, setLoad) => {
  try {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
      title: 'storage file',
      message: 'storage_permisson',
    }).then((granted) => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        downloadHistory(url, setLoad);
      } else {
        Alert.alert('storage_permission');
      }
    });
  } catch (err) {
    console.log('error', err);
  }
};

export const downloadHistory = async (url, setLoad) => {
  const { config, fs } = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let date = new Date();
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: true,
      path: PictureDir + '/Report_Download' + Math.floor(date.getTime() + date.getSeconds() / 2),
      description: 'Risk Report Download',
    },
  };
  setLoad(true);
  config(options)
    .fetch('GET', url)
    .then((res) => {
      //Showing alert after successful downloading
      setLoad(false);
      console.log('res -> ', JSON.stringify(res));
      alert("Votre fiche a été téléchagée vérifiez vos téléchargements");
    });
};
