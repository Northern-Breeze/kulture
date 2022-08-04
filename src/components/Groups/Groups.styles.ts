import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import configs from '../../config/constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        marginHorizontal: wp(4),
        marginVertical: wp(3),
        width: wp(70),
        height: hp(8),
        borderRadius: wp(2)
    },
    iconContainer: {
        marginVertical: hp(1),
        marginHorizontal: wp(3)
    },
    nameContainer: {
        marginHorizontal: wp(2),
        marginVertical: wp(1),
    },
    name: {
        fontFamily: configs().regularComfortaa,
        color: '#fff',
        fontSize: wp(5)
    }
});


export default styles;