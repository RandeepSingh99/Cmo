import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const scaleFactor = windowWidth / 375;

export const scaledValue = (value = 0) => value * scaleFactor;

export const reliefColors = {
  Medical: '#F0E4F7',
  Accident: '#FFF1F0',
  Kargil: '#FFF9EC',
  'Grand Total': '#E8FBF4',
};
