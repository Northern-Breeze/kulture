import {  StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    InternetConnected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notConnectedText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: hp(3),
    }
});

export default styles;