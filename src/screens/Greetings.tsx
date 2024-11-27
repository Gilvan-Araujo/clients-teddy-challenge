// create a base react native component that can be used to create a new screen
import { TextInput, TouchableOpacity, View } from 'react-native';

import InterText from '../components/InterText';

export default function Greetings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <InterText style={{ fontSize: 32 }}>Olá, seja bem-vindo!</InterText>

      <TextInput
        placeholder="Digite o seu nome:"
        style={{
          width: '100%',
          borderColor: '#D9D9D9',
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          fontSize: 24,
        }}
        placeholderTextColor="#AAAAAA"
      />

      <TouchableOpacity
        style={{
          width: '100%',
          padding: 16,
          borderRadius: 4,
          backgroundColor: '#EC6724',
          alignItems: 'center',
        }}
      >
        <InterText weight="bold" style={{ fontSize: 24, color: '#FFF' }}>
          Entrar
        </InterText>
      </TouchableOpacity>
    </View>
  );
}
