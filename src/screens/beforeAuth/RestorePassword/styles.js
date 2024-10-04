// Basic Import
import {StyleSheet, Dimensions} from 'react-native';

//  Assets
import COlORS from '../../../assets/colors';
import {FONT_FAMILIES} from '../../../assets/fonts';

//  Screen dimensions
const {width, height} = Dimensions.get('window');

//  Styles

const styles = StyleSheet.create({
  restorePassword__title: {
    marginLeft: 16,
    marginTop: height * 0.049,
    color: COlORS.text.black,
    fontSize: 34,
    lineHeight: 41,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    marginBottom: 15,
  },
  restorePassword__subtitle: {
    marginLeft: 16,
    color: COlORS.text.black,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    marginBottom: height * 0.13,
  },
  restorePassword__email: {
    height: height * 0.059,
    borderBottomWidth: 1,
    borderBottomColor: COlORS.lineGray,
    width: width * 0.91,
    alignSelf: 'center',
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    color: COlORS.text.black,
    fontSize: 17,
    lineHeight: 20,
  },
  error: {
    color: COlORS.red,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 16,
    marginTop: 5,
  },
  btn: {
    marginTop: 40,
  },
});
export default styles;
