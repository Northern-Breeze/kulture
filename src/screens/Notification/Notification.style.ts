import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    marginHorizontal: wp(1),
    marginVertical: hp(1),
    width: wp(100),
    height: hp(10),
    borderRadius: wp(1),
  },
});

export default style;
