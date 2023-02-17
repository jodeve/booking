import * as Font from 'expo-font';

export default async () =>
  await Font.loadAsync({
    "Poppins-Regular": require('../../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold": require('../../assets/fonts/Poppins-Bold.ttf'),
});