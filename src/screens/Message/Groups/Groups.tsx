import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import styles from './Groups.styles';

// components
import GroupNames from '../../../components/Groups';

export default function Groups(props) {
    const { navigation } = props;

    const handleNavigate = (name) => {
        navigation.push('chats', { groupName: name });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <GroupNames name="Science" icon="sourcetree" handleNavigate={handleNavigate}/>
                <GroupNames name="Community" icon="disqus" handleNavigate={handleNavigate}/>
                <GroupNames name="Sinners"  icon="gulp" handleNavigate={handleNavigate}/>
                <GroupNames name="Love and Guidance" icon="heart-eyes" handleNavigate={handleNavigate}/>
                <GroupNames name="Power Ball" icon="steam" handleNavigate={handleNavigate}/>
            </ScrollView>
        </View>
    )
}
