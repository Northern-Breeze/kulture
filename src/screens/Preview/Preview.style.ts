import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    resizeMode: 'contain',
  },
  image: {
    width: wp(45),
    height: hp(38),
    marginVertical: wp(2),
    marginHorizontal: hp(1),
    borderRadius: wp(1),
  },
});

export default styles;
