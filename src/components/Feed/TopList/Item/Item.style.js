import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2),
  },
  fullImage: {
    alignSelf: 'stretch',
    borderRadius: wp(3),
    margin: wp(2)
  },
});

export default styles;
