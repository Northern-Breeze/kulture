import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: wp(100),
        height: hp(100)
    },
    fullImage: {
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain'
    },
    nameContainer: {
        top: 1,
        flexDirection: "row",
        alignItems: 'center'
    },
    usernameContainer: {
        backgroundColor: '#80bfff',
        minWidth: wp(35),
        bottom: -40,
        marginHorizontal: wp(2),
        padding: wp(1.5),
        borderRadius: wp(4),
        opacity: 0.8
    },
    username: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;