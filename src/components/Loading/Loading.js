import React from 'react'
import { View, Text } from 'react-native'

import styles from './Loading.style';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading ...</Text>
        </View>
    )
}
