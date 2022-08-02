import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 25,
    },
    refreshButton: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: wp(60),
        height: hp(6),
        borderColor: '#000',
        borderWidth: 1,
        margin: hp(4),
        borderRadius: 6,
        backgroundColor: '#000'
    },
});

export default styles;