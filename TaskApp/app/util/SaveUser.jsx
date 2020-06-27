import { AsyncStorage } from 'react-native';

const SaveUserId = async userId => {
    try {
      await AsyncStorage.setItem('userId', userId);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
};

export default SaveUserId;