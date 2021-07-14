import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: wp(5),
    },
});

export default styles;