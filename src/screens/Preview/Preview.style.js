import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    fontSize: 13,
  },
  handler: {
    color: '#fff',
  },
  avatar: {
    height: 50,
    width: 50,
  },
});

export default styles;
