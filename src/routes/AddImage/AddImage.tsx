import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import AddPost from '../../screens/AddPost';
import SubmitImage from '../../screens/AddPost/SubmitImage';

const Stack = createStackNavigator();

export default function AddImageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddImage"
        component={AddPost}
        options={({route}) => ({
          title: '',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
        })}
      />
      <Stack.Screen name="Upload" component={SubmitImage} />
    </Stack.Navigator>
  )
}