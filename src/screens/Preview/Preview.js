import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import styles from './Preview.style';

// const background = require('../../assets/images/full_image_1.png');
const avatar = require('../../assets/images/avatar.png');

export default function Preview(props) {
    const { navigation } = props;
    return (
        <ImageBackground source={{ uri: 'https://picsum.photos/200/300' }} style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center'
                }}>
                    <View>
                        <Image source={avatar} />
                    </View>
                    <View>
                        <Text style={{ 
                            color: '#fff',       
                            fontFamily: 'Roboto-Regular',
                            fontWeight: 'bold',
                            fontSize: 13,
                            }}>Samuel Mothwa</Text>
                        <Text style={{ 
                            color: '#fff',
                            fontFamily: 'Roboto-Regular',
                            fontSize: 11
                        }}>@samuel_mothwa</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <EvilIcons name="close" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
