import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { USERNAME_COLLECTION } from '@storage/storageConfig';

import InterText from '../components/InterText';

export default function Greetings() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Por favor, digite seu nome');
      return;
    }

    try {
      await AsyncStorage.setItem(USERNAME_COLLECTION, name.trim());
      navigation.navigate('home');
    } catch (error) {
      console.error('Error saving name:', error);
      setError('Erro ao salvar nome. Tente novamente.');
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    setError('');
  };

  return (
    <View style={styles.container}>
      <InterText style={styles.title}>Olá, seja bem-vindo!</InterText>

      <TextInput
        placeholder="Digite o seu nome:"
        style={[styles.input, error ? styles.inputError : null]}
        placeholderTextColor="#AAAAAA"
        value={name}
        onChangeText={handleNameChange}
        autoFocus
        maxLength={50}
      />

      {error ? <InterText style={styles.errorText}>{error}</InterText> : null}

      <TouchableOpacity
        style={[styles.button, !name.trim() && { opacity: 0.5 }]}
        onPress={handleSubmit}
      >
        <InterText weight="bold" style={styles.buttonText}>
          Entrar
        </InterText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 32,
  },
  input: {
    width: '100%',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: 24,
  },
  inputError: {
    borderColor: '#FF4444',
  },
  errorText: {
    color: '#FF4444',
    fontSize: 14,
    marginTop: -10,
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#EC6724',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
});
