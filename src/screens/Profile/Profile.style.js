import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(7),
    },
    avatar: {
        borderRadius: wp(20),
        width: wp(40),
        height: hp(20)
    },
    usernameContainer: {
        marginTop: wp(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    location: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    button: {
        backgroundColor: '#000',
        width: wp(95),
        height: hp(8),
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextAdd: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    buttonSettings: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 10
    },
    buttonTextSettings: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    image: {
        width: wp(45),
        height: hp(40),
        margin: wp(2),
    },
    containerImages: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default styles;
