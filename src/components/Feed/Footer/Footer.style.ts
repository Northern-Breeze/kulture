import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(100),
    },
    Text: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: hp(3),
    }
});

export default styles;