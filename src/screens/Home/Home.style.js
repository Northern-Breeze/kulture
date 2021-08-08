import {StyleSheet, Dimensions} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  topScroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomScroll: {
    borderRadius: 12,
    borderWidth: 2,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  headerText: {
    color: '#000',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 30,
  },
  subheader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  subheaderText: {
    fontSize: 23,
    color: '#fff',
    fontFamily: 'Roboto-black',
  },

  // Card
  card: {
    marginTop: 15,
    marginHorizontal: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    borderRadius: 5,
    width: 400,
    height: 400,
  },
  imageInfo: {
    marginRight: 5,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 12,
  },
  infoText: {
    fontFamily: 'Roboto-bold',
    fontWeight: 'bold',
    fontSize: 13,
  },
  handle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: heightPercentageToDP(8),
    width: widthPercentageToDP(80),
    borderRadius: 10,
    marginVertical: 10,
  },
  // Browse all
  browseAll: {
    marginHorizontal: 15,
  },
  browseAllText: {
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default styles;
