import React from 'react'
import { View, Text, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Home.style';

import Feed from '../../components/Feed';

const avatar = require('../../assets/images/avatar.png');

export default function Home(props) {
    const { navigation } = props;
    const [newPost, setNewPost] = React.useState([
        {
            image: require('../../assets/images/feed_1.png')
        },
        {
            image: require('../../assets/images/feed_2.png')
        },{
            image: require('../../assets/images/feed_3.png')
        },{
            image: require('../../assets/images/feed_4.png')
        },
    ])
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
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.card} 
                activeOpacity={0.8} 
                onPress={() => navigation.navigate("Preview")}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.imageCard}/>
                </View>
                <View style={styles.cardInfo}>
                    <View style={styles.imageInfo}>
                        <Image source={avatar} style={styles.avatar}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Samuel Mothwa</Text>
                        <Text style={styles.handle}>@samuel_mothwa</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Discover</Text>
            </View>
            <View style={styles.suheader}>
                <Text style={styles.subheaderText}>WHAT'S NEW TODAY?</Text>
            </View>
                <FlatList
                    horizontal
                    data={newPost}
                    renderItem={renderItem}
                    keyExtractor={(id) => id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            <View style={styles.browseAll}>
                <Text style={styles.browseAllText}>
                    BROWSE ALL
                </Text>
            </View>
            <View>
                <Feed 
                    data={data} 
                    />
            </View>
        </ScrollView>
    )
}
