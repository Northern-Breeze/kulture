import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import font from '../../../config/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(145),
    width: wp(100),
    backgroundColor: '#eee',
    borderWidth: wp(0.5),
    borderColor: '#000',
    borderRadius: wp(1),
  },
  input: {
    width: wp(70),
    height: hp(6),
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: '#000',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp(1),
  },
  actions: {
    fontFamily: font().regularComfortaa,
    color: '#fff',
    fontSize: wp(5),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp(1),
    height: hp(8),
    width: wp(95),
    backgroundColor: '#000',
    borderRadius: wp(1),
  },
});

export default styles;
