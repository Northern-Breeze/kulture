import * as React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import styles from './Preview.style';


export default function Preview(props) {
    const { navigation, route } = props;
    const {avatar, username, image} = route.params; 

    const handleProfilePress = () => {
        navigation.navigate('Profile');
    }
    
    return (
        <ImageBackground source={{ uri: image }} style={styles.container} resizeMode="contain">
            <View style={styles.header}>
                <Pressable style={styles.context} onPress={handleProfilePress}>
                    <View>
                        <Image source={{ uri: avatar }} style={styles.avatar}/>
                    </View>
                    <View>
                        <Text style={styles.usernameText}>@{username}</Text>
                    </View>
                </Pressable>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <EvilIcons name="close" size={40} color="#000" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
