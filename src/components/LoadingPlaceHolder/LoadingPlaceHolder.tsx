import * as  React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './LoadingPlaceHolder.style'

export default function LoadingPlaceHolder() {
  return (
    <SkeletonPlaceholder>
      <View style={styles.image} />
    </SkeletonPlaceholder>
  );
}
