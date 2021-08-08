import React from 'react'
import { View, Text } from 'react-native'
import styles from './Empty.styles';

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Text>Search for Something</Text>
        </View>
    )
}
