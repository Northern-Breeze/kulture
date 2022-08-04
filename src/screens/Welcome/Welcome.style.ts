import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    imageContainer : {
        width: wp(100),
        height: hp(100),
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        resizeMode: 'cover'
    },
    brand: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: wp(10)
    },
    brandlogo: {
        flexDirection: "row",
    },
    avatar: {},
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    first: {
        flex: 1,
        backgroundColor: '#fff',
        width: wp(100),
        justifyContent: 'center',
        alignContent: "center",
    },
    buttonActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    },
    loginbtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: wp(44),
        height: hp(8),
        borderColor: '#000',
        borderWidth: wp(0.5),
        margin: wp(2),
    },
    loginText : {
        fontFamily: 'Roboto-Regular',
        fontSize: wp(3),
        color: '#000',
        fontWeight: 'bold',
    },
    second: {
        flex: 7,
        justifyContent: "center",
        alignItems: 'center'
    },
    registerbtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: wp(44),
        height: hp(8),
        borderColor: '#000',
        borderWidth: wp(1),
        margin: wp(2),
        backgroundColor: '#000'
    },
    registerText: {
        fontFamily: 'Roboto-Regular',
        fontSize: wp(3),
        color: '#fff',
        fontWeight: 'bold',
    },
    InternetConnected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notConnectedText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: wp(3),
    }
    
});

export default styles;