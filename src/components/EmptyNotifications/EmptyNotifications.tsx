import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './EmptyNotifications.styles';

export default function EmptyNotifications() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.infoText}>You don't have any Notification</Text>
        </View>
    </View>
  )
}