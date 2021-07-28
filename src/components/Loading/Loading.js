import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

import styles from './Loading.style';

export default function Loading() {
    return (
        <View style={styles.container}>
            <LottieView autoPlay loop source={require('../../assets/loading.json')} />
        </View>
    )
}
