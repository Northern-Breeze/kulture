import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    header: {
        fontSize: 20,
        fontFamily: 'Comfortaa'
    },
    inputs: {
        padding: 10,
        marginHorizontal: 10,
    },
    tagHeader: {
        paddingVertical: 10,
    },
    tags: {
        fontSize: 18,
        fontFamily: 'Comfortaa'
    },  
    input: {
        borderWidth: 2,
        borderColor: '#000',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        height: 60,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    actions: {
        fontFamily: 'Comfortaa',
        color: '#fff',
        fontSize: 18,
    }
});

export default styles;