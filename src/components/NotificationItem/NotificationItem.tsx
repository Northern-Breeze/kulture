import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { formatDistance } from 'date-fns'
import { Actions, useStoreActions } from 'easy-peasy';
import { showMessage } from 'react-native-flash-message';

import {Model} from '../../store/model';

import styles from './NotificationItem.styles';

import {Notification} from '../../store/model';
import server from '../../service/server';

type Props = {
  item: Notification;
};

export default function NotificationItem(props: Props) {
  const {item} = props;
  const {title, id, body, is_read, created_at, type} = item;
  
  const date = new Date(created_at);
  
  const markReadNotification = useStoreActions((action: Actions<Model>) => action.markReadNotification)

  const imageUrl = body.imageUrl;

  const handlePressNotification = async () => {
    try {
      const response = await server.readNotification({ id });
      if (response.data.success) {
          markReadNotification(id);        
      } else {
        showMessage({
          message: response.data.message,
          type: 'danger'
        })
      }
    } catch (error) {
      showMessage({
        message: 'Something went wrong please try again',
        type: 'danger'
      })
    }
  }

  return (
    <Pressable style={[styles.container, is_read ? { opacity: 0.8} : {}]} onPress={handlePressNotification}>
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
    </Pressable>
  );
}
