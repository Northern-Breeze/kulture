import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Preview.style';

const background = require('../../assets/images/full_image_1.png');
const avatar = require('../../assets/images/avatar.png');

export default function Preview(props) {
    const { navigation } = props;
    return (
        <ImageBackground source={background} style={styles.container}>
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
                <TouchableOpacity onPress={() => navigation.navigate("home")}>
                    <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    fontFamily: 'Roboto-Regular',
                }}>x</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
