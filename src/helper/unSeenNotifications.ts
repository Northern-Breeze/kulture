import { Notification } from "../store/model";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveUnSeenNotifications = async (val: Notification) => {
    try {
        const notifs = await AsyncStorage.getItem('notifications');

        if (!notifs) { 
            
            // Create new array to save notification
            const notification = [];

            // push to the new array
            notification.push(val);
            
            // stringify
            const strN = JSON.stringify(notification);
            
            // set to the storage
            await AsyncStorage.setItem('notifications', strN);
        } else {

            // parse the array
            const notifications = JSON.parse(notifs);
    
            if (!notifications) {
                return;
            }
            
            // push to the old array
            notifications.push(val);

            // set to the storage
            await AsyncStorage.setItem('notifications', notifications);
        }
    } catch (error) {
        console.log(error);
    }
}

export default saveUnSeenNotifications