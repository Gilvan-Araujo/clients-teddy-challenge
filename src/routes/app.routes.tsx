import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import { Image, SafeAreaView } from 'react-native';

import ClientsIcon from '@assets/clients.svg';
import HomeIcon from '@assets/home.svg';
import ProductsIcon from '@assets/products.svg';

import Clients from '@screens/Clients';
import Greetings from '@screens/Greetings';
import Home from '@screens/Home';
import Products from '@screens/Products';

const DrawerNavigator = createDrawerNavigator();

export const AppRoutes = () => {
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
          <Image
            source={require('@assets/teddy-logo.png')}
            style={{ maxWidth: 70, maxHeight: 35 }}
          />
        ),

        drawerActiveTintColor: '#EC6724',
      }}
      initialRouteName="greetings"
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
    </DrawerNavigator.Navigator>
  );
};
