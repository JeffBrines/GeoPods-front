// Basic Import
import {StyleSheet, Dimensions} from 'react-native';

//  Assets
import COlORS from '../../../assets/colors';
import {FONT_FAMILIES} from '../../../assets/fonts';

//  Screen dimensions
const {width, height} = Dimensions.get('window');

//  Styles

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: COlORS.greyBackground,
    flex: 1,
  },
  signUp__scrollView: {},
  signUp__container: {
    marginLeft: width * 0.042,
    marginRight: width * 0.042,
  },
  signUp__title: {
    marginTop: height * 0.049,
    color: COlORS.text.black,
    fontSize: 34,
    lineHeight: 41,
    fontFamily: FONT_FAMILIES.SFProDisplay.bold,
    marginBottom: height * 0.043,
  },
  signUp__block: {
    backgroundColor: COlORS.mainColor,
    borderRadius: 10,
  },
  signUp__topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.042,
    height: 44,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(60, 60, 67, 0.36)',
  },
  signUp__content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.042,
    height: 44,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(60, 60, 67, 0.36)',
  },
  signUp__bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.042,
    height: 44,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgba(60, 60, 67, 0.36)',
  },
  signUp__nameItems: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    color: COlORS.text.black,
    flex: 1,
  },
  signUp__input: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    color: COlORS.text.black,
    flex: 1,
  },
  signUp__subtitle: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    color: COlORS.text.black,
    marginTop: height * 0.05,
    marginBottom: height * 0.017,
  },
  signUp__description: {
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    fontSize: 17,
    lineHeight: 20,
    color: COlORS.text.black,
    marginTop: height * 0.032,
    marginBottom: height * 0.017,
  },
  signUp__descriptionInput: {
    width: width * 0.91,
    height: height * 0.17,
    backgroundColor: COlORS.mainColor,
    borderRadius: 10,
    paddingLeft: 16,
  },
});
export default styles;
