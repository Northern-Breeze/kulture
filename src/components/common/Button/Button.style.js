import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: wp(90),
    height: hp(8),
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Comfortaa-Bold',
    fontSize: wp(4),
  },
});

export default styles;
