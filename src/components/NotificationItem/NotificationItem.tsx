import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { formatDistance } from 'date-fns'

import styles from './NotificationItem.styles';

import {Notification} from '../../store/model';

type Props = {
  item: Notification;
};

export default function NotificationItem(props: Props) {
  const {item} = props;
  const {title, id, body, is_read, created_at, type} = item;
  
  const date = new Date(created_at);
  
  const imageUrl = body.imageUrl;
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: imageUrl}} style={styles.profile} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.subInfoContainer}>
          <View>
            <Text style={styles.dateCreated}>{formatDistance(date, new Date(), { addSuffix: true, includeSeconds: true  })}</Text>
          </View>
          <View style={styles.pipe}>
            <Text>|</Text>
          </View>
          <View>
            <Text style={styles.notificationType}>{type === 'USER_NOTIFICATION' ? 'GENERAL': 'ANNOUNCEMENT'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
