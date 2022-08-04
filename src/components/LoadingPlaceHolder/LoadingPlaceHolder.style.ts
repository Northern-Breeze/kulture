import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    image: {
        width: wp(45),
        height: hp(38),
        margin: wp(2),
    },
});

export default styles;