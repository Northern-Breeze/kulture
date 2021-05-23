import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './AddPost.style';

export default function AddPost() {
    const [tag, setTag] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Add Post</Text>
            </View>
            <View style={styles.inputs}>
                <View style={styles.tagHeader}>
                    <Text style={styles.tags}>Tags</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="Post name"
                        value={tag}
                        style={styles.input}
                        onChangeText={(val) => {
                            setTag(val);
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => {
                            //
                        }}
                    >
                        <Text style={styles.actions}>
                            Select or Take a picture
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
