import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import NetworkAssets from '../../assets/no-internet.json';

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
            <LottieView autoPlay loop source={NetworkAssets} />
          </View>
          <View>
            <Text style={styles.notConnectedText}>No Network Connection</Text>
          </View>
        </View>
    )
}
