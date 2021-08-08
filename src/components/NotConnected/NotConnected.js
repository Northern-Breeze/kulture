import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import styles from './NotConneted.style';

export default function NotConnected() {
    return (
        <View style={styles.InternetConnected}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <View>
            <Text style={styles.notConnectedText}>No Network Connection</Text>
          </View>
        </View>
    )
}
