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
    registerContainer: {
        marginTop: hp(5),
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: wp(10),
    },
    registerText:{
        color: '#000',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 30,
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
        marginVertical: 5,
        padding: wp(5),
        borderRadius: 2
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        width: wp(80),
        height: hp(10),
    },
    nextText: {
        color: '#fff',
        fontFamily: 'Roboto-black',
        fontSize: wp(5),
        fontWeight: 'bold',
    },
    linkbtn: {
        marginVertical: hp(2),
        marginHorizontal: wp(6),
    },
    linkText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: wp(3)
    }
});

export default styles;