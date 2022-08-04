import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import font from '../../config/constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(40),
    },
    listText: {
        fontFamily: font().regularComfortaa 
    }
});

export default styles;