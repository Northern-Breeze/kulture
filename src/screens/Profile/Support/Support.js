import React from 'react'
import { View, Text, Pressable, Linking } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './Support.styles';

export default function Support() {
    const handlePress = () => {
        Linking.openURL('https://buymeacoffee.com/thagana')
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={handlePress}>
                <View style={styles.icon}>
                    <Fontisto name="gulp" color="#fff" size={30} />
                </View>
                <View>
                    <Text style={styles.text}>Support Me</Text>
                </View>
            </Pressable>
        </View>
    )
}
