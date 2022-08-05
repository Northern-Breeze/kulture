import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: wp(2),
    },
    controls: {
        flexDirection: 'row',
        // padding: wp(1),
    },
    search: {
        borderColor: '#000',
        borderWidth: 2,
        padding: wp(3),
        borderTopLeftRadius: wp(1),
        borderBottomLeftRadius: wp(1),
        width: wp(76),
    },
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: wp(20),
        height: hp(10),
        borderTopRightRadius: wp(1),
        borderBottomRightRadius: wp(1),
    }
});

export const ICON_SIZE = wp(10);

export default styles;