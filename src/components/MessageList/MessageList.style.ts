import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: wp(5),
    },
    avatar: {
        width: wp(14),
        height: hp(7),
        borderRadius: wp(10),
        borderColor: '#fff',
        borderWidth: 1,
    },
});

export default styles;