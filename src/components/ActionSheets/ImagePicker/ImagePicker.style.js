import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    actionSheet: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(20),
    },
    imageButtons: {
        margin: 10
    }
});

export default styles;