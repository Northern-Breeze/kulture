import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    actionSheet: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(20),
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'column'
    },
    imageButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    textContainer: {
        marginHorizontal: 10
    },
    text: {
        fontFamily: 'Comfortaa-Regular'
    }
});

export default styles;