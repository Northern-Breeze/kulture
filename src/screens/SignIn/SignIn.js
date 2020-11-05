import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStoreActions, useStoreState } from 'easy-peasy'
import styles from './SignIn.style';

export default function SignIn(props) {
    const { navigation } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const login = useStoreActions((action) => action.login)
    const isloggedin = useStoreState((state) => state.isloggedIn)
    const authenticate = () => {
        login();
        console.log(isloggedin)
    }
    const goTo = (place) => {
        navigation.navigate(place);
    }
    return (
        <View style={styles.container}>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Login</Text>
            </View>
            <View style={styles.fields}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputValue}
                        placeholder="Enter Email Address"
                        onChange={setEmail}
                        value={email}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputValue}
                        placeholder="Enter Password"
                        onChange={setPassword}
                        value={password}
                    />
                </View>
                <View style={styles.input}>
                    <TouchableOpacity style={styles.button} onPress={authenticate}>
                        <Text style={styles.nextText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.linkbtn} onPress={() => goTo('signup')}>
                        <Text style={styles.linkText}>
                            don't have an acount? Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
