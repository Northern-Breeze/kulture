import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
  backgroundVideo: {
    marginVertical: hp(0.5),
    marginHorizontal: wp(2),
    width: wp(95),
    height: hp(50),
    borderRadius: 5,
  },
});

export default styles;
