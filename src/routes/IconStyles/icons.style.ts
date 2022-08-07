import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  iconBadgeStyle: {
    height: hp(2.6),
    backgroundColor: '#FF00EE',
    left: wp(3),
  },
  iconCountText: {color: '#FFFFFF', fontSize: wp(3)},
});

export default styles;
