import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import styles from './Button.style';

export default function Button(props) {
    const { buttonHandler, buttonText, isLoading } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={buttonHandler}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    )
}
