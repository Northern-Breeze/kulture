import {StyleSheet} from 'react-native';
import font from '../../config/constant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(80),
    },
    infoText: {
        fontFamily: font().regularComfortaa,
        fontSize: wp(5),
        color: '#000',
    }
});

export default styles;