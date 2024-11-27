import 'react-native-gesture-handler';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Image, SafeAreaView } from 'react-native';

import Greetings from './src/screens/Greetings';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      id={undefined}
      screenOptions={{
        headerShown: true,
        drawerPosition: 'right',
        drawerStyle: { maxWidth: 280, marginRight: 0, right: 0, width: '100%' },
        headerLeft: () => null,
        headerRight: (props) => (
          <DrawerToggleButton {...props} tintColor="#666666" />
        ),
        headerTitle: () => (
          <Image
            source={require('./assets/teddy-logo.png')}
            style={{ maxWidth: 70, maxHeight: 35 }}
          />
        ),
      }}
      initialRouteName="Saudações"
    >
      <Drawer.Screen name="Saudações">
        {() => (
          <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Greetings />
          </SafeAreaView>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

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
      <MyDrawer />
    </NavigationContainer>
  );
}
