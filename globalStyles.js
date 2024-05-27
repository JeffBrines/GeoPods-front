//  Basic Import
import {StyleSheet, Dimensions} from 'react-native';

// Assets
import COLORS from './src/assets/colors';
import {FONT_FAMILIES} from './src/assets/fonts';

// Screen Dimensions
const {width, height} = Dimensions.get('window');

//  Styles
const globalStyles = StyleSheet.create({
  app: {
    height: '100%',
    width: '100%',
    color: COLORS.mainColor,
  },
});

export default globalStyles;
