// Basic Import
import {StyleSheet, Dimensions} from 'react-native';

//  Assets
import COlORS from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

//  Screen dimensions
const {width, height} = Dimensions.get('window');

//  Styles

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COlORS.blue,
    height: height * 0.063,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    width: width * 0.91,
    display: 'flex',
    flexDirection: 'row',
  },
  btn__text: {
    color: COlORS.mainColor,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    marginLeft: 12,
  },
  btn__disable: {
    backgroundColor: 'red',
  },
});
export default styles;
