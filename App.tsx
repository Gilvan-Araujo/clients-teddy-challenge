import 'react-native-gesture-handler';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import Drawer from './src/components/Drawer';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#EC6724" />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
