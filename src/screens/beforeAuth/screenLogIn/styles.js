// Basic Import
import {StyleSheet, Dimensions} from 'react-native';

//  Assets
import COlORS from '../../../assets/colors';
import {FONT_FAMILIES} from '../../../assets/fonts';

//  Screen dimensions
const {width, height} = Dimensions.get('window');

//  Styles

const styles = StyleSheet.create({
  logIn: {},
  logIn__title: {
    marginLeft: 20,
    marginTop: 40,
    color: COlORS.text.black,
    fontSize: 34,
    lineHeight: 41,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    marginBottom: 91,
  },
  logIn__email: {
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
  logIn__password: {
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
  logIn__button: {
    height: height * 0.063,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 16,
    marginBottom: 20,
  },
  logIn__forgotText: {
    color: COlORS.text.blue,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
  },
  logIn__text: {
    color: COlORS.text.blue,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 28,
  },
  btnLogIn: {
    marginBottom: 76,
  },
  btnApple: {
    backgroundColor: COlORS.text.black,
    marginBottom: 12,
  },
  btnGoogle: {
    backgroundColor: COlORS.text.mainColor,
    borderWidth: 1,
    borderColor: COlORS.blue,
    marginBottom: 12,
  },
  btnFacebook: {
    backgroundColor: COlORS.violet,
  },
  btnText: {
    color: COlORS.blue,
  },
  error: {
    color: COlORS.red,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 16,
    marginTop: 5,
  },
});
export default styles;
