import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './MessageList.style';

export default function MessageList(props) {
    const { item } = props;
    const { avatar } = item;
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
            </View>
        </View>
    )
}
