import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: wp(100),
        height: hp(100),
        borderRadius: wp(2),
        resizeMode: 'contain'
    },
});

export default styles;
