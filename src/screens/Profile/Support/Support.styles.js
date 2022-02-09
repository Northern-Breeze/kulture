import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import constant from '../../../config/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(66),
        height: hp(7),
        backgroundColor: '#f5c242',
        borderRadius: wp(3)
    },
    text: {
        fontSize: 17,
        color: '#fff',
        fontFamily: constant().regularComfortaa
    },
    icon: {
        marginHorizontal: wp(3)
    }
});

export default styles;