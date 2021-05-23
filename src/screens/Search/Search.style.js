import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      padding: 10
  },
  headerText: {
      fontSize: 20,
      fontFamily: 'Comfortaa-Bold'
  },
  searchContainer: {

  },
  resultsText: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  results: {
      fontWeight: 'bold'
  },
  search: {
      borderColor: '#000',
      borderWidth: 2,
      marginHorizontal: 10,
      padding: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  images: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: wp(45),
    height: hp(40),
    margin: wp(2),
  }
});

export default style;
