import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageContainer : {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        resizeMode: 'cover'
    },
    brand: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 30
    },
    brandlogo: {
        flexDirection: "row",
        // justifyContent: "space-evenly",
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    first: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignContent: "center",
    },
    buttonActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "center"
    },
    loginbtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: 167,
        height: 52,
        borderColor: '#000',
        borderWidth: 2,
        margin: 5,
        borderRadius: 6,
    },
    loginText : {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        color: '#000',
        fontWeight: 'bold',
    },
    second: {
        flex: 7,
        justifyContent: "center",
        alignItems: 'center'
    },
    registerbtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: 167,
        height: 52,
        borderColor: '#000',
        borderWidth: 1,
        margin: 5,
        borderRadius: 6,
        backgroundColor: '#000'
    },
    registerText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
    }
    
});

export default styles;