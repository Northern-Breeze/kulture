import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searhBoxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    width: '90%',
    height: 52,
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
  },
  showAll: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  showAllText: {
    fontFamily: 'Roboto-Black',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default styles;
