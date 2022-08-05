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
  image: {
    width: wp(45),
    height: hp(38),
    marginVertical: wp(2),
    marginHorizontal: hp(1),
    borderRadius: wp(1),
  },
  errorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(90)
  },
  errorContainerInfo: {marginVertical: 10},
  errorContainerText: {
    color: '#000',
  },
});

export default styles;
