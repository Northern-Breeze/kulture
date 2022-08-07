import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import font from '../../config/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: wp(1),
    marginVertical: hp(1),
    padding: wp(2),
    borderRadius: wp(2),
  },
  profile: {
    width: wp(15),
    height: hp(8),
    borderRadius: wp(3),
    margin: wp(1),
  },
  infoContainer: {
    flexDirection: 'column',
  },
  titleContainer: {},
  titleText: {
    fontFamily: font().regularComfortaa,
    fontSize: wp(4),
  },
  dateCreated: {
    fontFamily: font().regularComfortaa,
    fontSize: wp(3),
  },
  notificationType: {
    fontFamily: font().regularComfortaa,
    fontSize: wp(3),
  },
  subInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pipe: {
    marginHorizontal: wp(1)
  }
});

export default styles;
