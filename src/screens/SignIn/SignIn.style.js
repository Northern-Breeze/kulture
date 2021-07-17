import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp(4)
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputValue: {
        width: wp(90),
        height: hp(8),
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: hp(1),
        padding: wp(5),
        borderRadius: 2
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        width: wp(90),
        height: hp(8),
    },
    nextText: {
        color: '#fff',
        fontFamily: 'Comfortaa-Bold',
        fontSize: wp(4),
    },
    linkbtn: {
        marginVertical: hp(1),
        marginHorizontal: wp(6),
    },
    linkText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: wp(3)
    },
});

export default styles;