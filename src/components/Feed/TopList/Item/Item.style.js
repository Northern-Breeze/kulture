import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    backgroundImage: {
        width: wp(100),
        height: hp(100)
    },
    fullImage: {
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain'
    }
});

export default styles;