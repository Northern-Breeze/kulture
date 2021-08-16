import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    resizeMode: 'contain',
  },
  avatar: {
    width: wp(21),
    height: hp(11),
    borderRadius: wp(50),
    marginHorizontal: wp(2),
    borderColor: '#fff',
    borderWidth: 1,
  },
  context: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    fontWeight: 'bold'
  },
  header: {
    marginTop: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default styles;
