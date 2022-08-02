import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './EmptyList.style';

type Props = {
  refreshHandler(): void;
}

export default function EmptyList(props: Props) {
  const {refreshHandler} = props;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View>
        <Text style={styles.emptyText}>Not Posts</Text>
      </View>
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={refreshHandler}
        activeOpacity={0.8}>
        <Text style={[styles.emptyText, {color: '#fff', fontSize: 18}]}>
          Refresh
        </Text>
      </TouchableOpacity>
    </View>
  );
}
