import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './ListEmptyPost.style';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListEmpty() {
  return (
    <View style={styles.container}>
        <View>
            <Ionicons name="md-list-circle-outline" size={45} color="#000" />
        </View>
        <View>
            <Text style={styles.listText}>NO USERS YET!</Text>
        </View>
    </View>
  )
}