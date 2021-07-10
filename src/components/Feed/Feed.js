import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Feed.style';

export default function Feed(props) {
    const { data, Header } = props;
    console.log('##########', Header);
    const Item = ({ image }) => {
        return (
            <TouchableOpacity>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }
    const renderFeed = ({ item }) => (
        <Item image={item.image} />
    )
    return (
        <View>
            <FlatList
                ListHeaderComponent={<Header />}
                numColumns={2}
                columnWrapperStyle={styles.container}
                data={data}
                renderItem={renderFeed}
                keyExtractor={( item ) => item.postId}
            />
        </View>
    )
}
