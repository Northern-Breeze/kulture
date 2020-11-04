import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Welcome.style';

const backgroundImage = require('../../assets/images/background.png')
const avater = require('../../assets/images/Union.png')

export default function Welcome() {
    return (
        <ImageBackground source={backgroundImage} style={styles.imageContainer}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
            <View style={styles.second}>
                <View style={styles.brandlogo}>
                    <View>
                        <Image source={avater} style={styles.avater} />
                    </View>
                    <View>
                        <Text style={styles.brand}>Kulture</Text>
                    </View>
                </View>
            </View>
            <View style={styles.first}>
                <View style={styles.buttonActions}>
                    <TouchableOpacity style={styles.loginbtn} activeOpacity={0.7}>
                        <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerbtn} activeOpacity={0.7}>
                        <Text style={styles.registerText}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
