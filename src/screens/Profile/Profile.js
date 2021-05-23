import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feed from '../../components/Feed';

import styles from './Profile.style';

export default function Profile() {
    const [data] = React.useState([
        {
            id: 1,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/150'
        },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.avatarContainer}>
                    <View>
                        <Image
                            source={{ uri: 'https://picsum.photos/200/300?grayscale' }}
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
                        activeOpacity={0.9}
                        style={styles.button}
                    >
                        <Text style={styles.buttonTextAdd}>
                            Add New Post
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={[styles.button, styles.buttonSettings]}
                            activeOpacity={0.9}
                            >
                        <Text style={[ styles.buttonTextAdd, styles.buttonTextSettings ]}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Feed
                        data={data}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
