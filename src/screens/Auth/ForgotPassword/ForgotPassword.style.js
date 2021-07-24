import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: wp(60),
    },
    inputValue: {
        width: wp(90),
        height: hp(8),
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: hp(1),
        padding: wp(5),
        borderRadius: wp(1)
    },
});

export default styles;