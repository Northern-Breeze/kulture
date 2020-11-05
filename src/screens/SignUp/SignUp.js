import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './SignUp.style';

export default function SignUp(props) {
    const { navigation } = props;
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const register = () => {
        //
    }
    const goTo = (place) => {
        navigation.navigate(place);
    }
    return (
        <View style={styles.container}>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Register</Text>
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
                        placeholder="Enter Username"
                        onChange={setUsername}
                        value={username}
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
                    <TouchableOpacity style={styles.button} onPress={register}>
                        <Text style={styles.nextText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.linkbtn} onPress={() => goTo("signin")}>
                        <Text style={styles.linkText}>
                            Alredy have an account? Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
