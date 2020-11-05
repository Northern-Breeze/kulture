import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Welcome.style';

const backgroundImage = require('../../assets/images/background.png')
const logo = require('../../assets/images/logo.png')

export default function Welcome(props) {
    console.log(props);
    const { navigation } = props;
    const goTo = (place) => {
        navigation.navigate(place);
    }
    return (
        <ImageBackground source={backgroundImage} style={styles.imageContainer}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
            <View style={styles.second}>
                <View style={styles.brandlogo}>
                    <View style={styles.logo}>
                        <Image source={logo} style={styles.avater} />
                    </View>
                </View>
            </View>
            <View style={styles.first}>
                <View style={styles.buttonActions}>
                    <TouchableOpacity style={styles.loginbtn} activeOpacity={0.7} onPress={() => goTo("signin")}>
                        <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerbtn} activeOpacity={0.7} onPress={() => goTo("signup")}>
                        <Text style={styles.registerText}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
