import React from 'react'
import { View, Text } from 'react-native'
import styles from './Validation.style';


export default function Validation(props) {
    const { message } = props;
    if (message) {
        return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{message}</Text>
            </View>
        </View>    
        )
    }
    return null
}
