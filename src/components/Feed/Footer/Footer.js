import React from 'react'
import { View, Text } from 'react-native'
import Loading from '../../Loading';
import LottieView from 'lottie-react-native';

import styles from './Footer.style';

export default function Footer() {
    return (
        <View style={styles.container}>
          <LottieView autoPlay loop source={require('../../../assets/loading.json')} />
        </View>
    )
}
