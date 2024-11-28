import 'react-native-gesture-handler';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return <>{fontsLoaded ? <Routes /> : <Loading />}</>;
}
