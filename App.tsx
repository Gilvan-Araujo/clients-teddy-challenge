import 'react-native-gesture-handler';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

import { Loading } from '@components/Loading';

import SelectedClientsProvider from '@context/SelectedClientsContext';

import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <SelectedClientsProvider>
      {fontsLoaded ? <Routes /> : <Loading />}
    </SelectedClientsProvider>
  );
}
