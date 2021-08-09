import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import theme from '../../../../config/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: hp(100),
  },
  fullImage: {
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
  nameContainer: {
    top: 1,
    position: 'relative',
    alignItems: 'center',
  },
  usernameContainer: {
    bottom: -90,
  },
  viewContainer: {
    borderRadius: wp(4),
    padding: wp(1.5),
    opacity: 0.8,
    marginHorizontal: wp(2),
    marginVertical: wp(2),
    width: wp(35),
    backgroundColor: '#80bfff',
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tagContainer: {
    bottom: -100,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#3399ff',
    opacity: 0.6,
    marginHorizontal: 2,
    borderRadius: 10,
  },
  tagText: {
    fontFamily: theme().regularComfortaa,
    color: '#fff',
    fontSize: 12,
    padding: 5,
  },
});

export default styles;
