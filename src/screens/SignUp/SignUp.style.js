import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    registerContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    registerText:{
        color: '#000',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 30,
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputValue: {
        width: 370,
        height: 52,
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: 5,
        padding: 13,
        borderRadius: 2
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        width: 370,
        height: 52,
    },
    nextText: {
        color: '#fff',
        fontFamily: 'Roboto-black',
        fontSize: 13,
        fontWeight: 'bold',
    },
    linkbtn: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    linkText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 10
    }
});

export default styles;