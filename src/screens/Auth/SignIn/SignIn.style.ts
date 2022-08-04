import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(2),
    marginTop: hp(25),
  },
  logo: {
    margin: wp(4),
    width: wp(50),
    height: hp(5),
  },
  fields: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputValue: {
    width: wp(90),
    height: hp(9),
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: hp(1),
    padding: wp(5),
    color: '#000',
  },
  nextText: {
    color: '#fff',
    fontFamily: 'Comfortaa-Bold',
    fontSize: wp(4),
    textDecorationLine: 'underline',
  },
  linkbtn: {
    marginVertical: hp(1),
    marginHorizontal: wp(6),
  },
  linkText: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: wp(3),
    textDecorationLine: 'underline',
  },
  eyeIcon: {
    bottom: hp(7.5),
    left: wp(37),
  },
});

export default styles;
