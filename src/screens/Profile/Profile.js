import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Profile.style';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarContainer}>
                <View>
                    <Image
                        source={{ uri: 'https://picsum.photos/id/237/200/300' }}
                        style={styles.avatar}
                    />
                </View>
            </View>
            <View>
                <View style={styles.usernameContainer}>
                    <Text style={styles.username}>Jane</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locations}>
                        South Africa, Polokwane
                    </Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonTextAdd}>
                        Add New Post
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSettings]}>
                    <Text style={[ styles.buttonTextAdd, styles.buttonTextSettings ]}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
