import { StyleSheet } from 'react-native';

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
    otpbtn : {
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 20,
        width: 80,
        fontSize: 30,
    },
    buttonContainer : {
        marginVertical: 25
    },
    sendbtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: 380,
        height: 50,
        borderRadius: 10
    },
    verifyText: {
        color: '#fff',
        fontSize: 20
    }
});


export default styles