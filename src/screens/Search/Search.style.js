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
  resultsContainer: {
    flex: 1,
  },
  rowResults: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: wp(30),
    height: hp(17),
    margin: wp(2),
    borderRadius: wp(20),
    resizeMode: 'cover'
  }
});

export default style;
