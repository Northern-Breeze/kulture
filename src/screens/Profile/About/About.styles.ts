import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import font from '../../../config/constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        margin: wp(5)
    },
    headerText: {
        fontFamily: font().regularComfortaa,
        fontSize: wp(6),
        textDecorationLine: 'underline',
    },
    content: {
        margin: wp(2.5),
    },
    contentText: {
        fontFamily: font().regularComfortaa,
        fontSize: wp(4.5),
    }
});

export default styles;