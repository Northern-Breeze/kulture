import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputs: {
        flexDirection: 'row',
    },
    logo: {
        margin: hp(4),
        width: wp(60),
    },
    otpbtn : {
        borderRadius: wp(2),
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: wp(5),
        width: wp(18),
        fontSize: wp(5),
    },
    buttonContainer : {
        marginVertical: hp(5)
    }
});


export default styles