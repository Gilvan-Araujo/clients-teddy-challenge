import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import ClientsIcon from '@assets/clients.svg';
import HomeIcon from '@assets/home.svg';
import ProductsIcon from '@assets/products.svg';

import InterText from '@components/InterText';

import Clients from '@screens/Clients';
import Greetings from '@screens/Greetings';
import Home from '@screens/Home';
import Products from '@screens/Products';

import { USERNAME_COLLECTION } from '@storage/storageConfig';

const DrawerNavigator = createDrawerNavigator();

export const AppRoutes = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [initialRoute, setInitialRoute] = useState('');

  const updateUsername = async () => {
    const storedUsername = await AsyncStorage.getItem(USERNAME_COLLECTION);
    setUsername(storedUsername || '');
  };

  useEffect(() => {
    const checkInitialRoute = async () => {
      const storedUsername = await AsyncStorage.getItem(USERNAME_COLLECTION);
      setInitialRoute(storedUsername ? 'home' : 'greetings');
      setUsername(storedUsername || '');
    };
    checkInitialRoute();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', updateUsername);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', updateUsername);
    return unsubscribe;
  }, [navigation]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem(USERNAME_COLLECTION);
    navigation.navigate('greetings');
    updateUsername();
  };

  if (!initialRoute) {
    return null;
  }

  return (
    <DrawerNavigator.Navigator
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
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image
              source={require('@assets/teddy-logo.png')}
              style={{ maxWidth: 70, maxHeight: 35 }}
            />
            <InterText style={{ fontSize: 16 }}>Olá, {username}</InterText>
          </View>
        ),
        drawerActiveTintColor: '#EC6724',
        drawerContentContainerStyle: { flex: 1 },
        drawerContentStyle: { flex: 1 },
      }}
      initialRouteName={initialRoute}
    >
      <DrawerNavigator.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: true,
          drawerIcon: (props) => {
            return <HomeIcon color={props.focused ? '#EC6724' : '#666666'} />;
          },
        }}
      >
        {() => (
          <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Home />
          </SafeAreaView>
        )}
      </DrawerNavigator.Screen>

      <DrawerNavigator.Screen
        name="greetings"
        options={{
          headerShown: false,
          drawerStyle: { display: 'none' },
          drawerItemStyle: { display: 'none' },
        }}
      >
        {() => (
          <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Greetings />
          </SafeAreaView>
        )}
      </DrawerNavigator.Screen>

      <DrawerNavigator.Screen
        name="clients"
        options={{
          title: 'Clientes',
          drawerIcon: (props) => {
            return (
              <ClientsIcon color={props.focused ? '#EC6724' : '#666666'} />
            );
          },
        }}
      >
        {() => (
          <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Clients />
          </SafeAreaView>
        )}
      </DrawerNavigator.Screen>

      <DrawerNavigator.Screen
        name="products"
        options={{
          title: 'Produtos',
          drawerIcon: (props) => {
            return (
              <ProductsIcon color={props.focused ? '#EC6724' : '#666666'} />
            );
          },
        }}
      >
        {() => (
          <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Products />
          </SafeAreaView>
        )}
      </DrawerNavigator.Screen>

      <DrawerNavigator.Screen
        name="logout"
        options={{
          title: 'Sair',
          drawerLabel: () => (
            <InterText style={{ textAlign: 'right' }}>Sair</InterText>
          ),
          drawerItemStyle: {
            marginTop: 'auto',
            borderTopWidth: 1,
            borderTopColor: '#DDDDDD',
            paddingTop: 10,
          },
        }}
        listeners={{
          drawerItemPress: () => {
            handleLogout();
          },
        }}
      >
        {() => null}
      </DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
};
