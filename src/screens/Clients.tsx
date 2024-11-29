import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { Card } from '@components/Card';
import InterText from '@components/InterText';

import { useSelectedClients } from '@context/SelectedClientsContext';

export default function Clients() {
  const navigation = useNavigation();
  const { selectedClients, clearClients } = useSelectedClients();

  return (
    <View style={{ flex: 1, alignItems: 'center', gap: 20 }}>
      <InterText style={{ fontSize: 22 }} weight="bold">
        Clientes selecionados:
      </InterText>

      <FlatList
        data={selectedClients}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => <Card client={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          alignItems: 'center',
          borderColor: '#EC6724',
          padding: 10,
          borderRadius: 4,
          borderWidth: 2,
        }}
        onPress={() => {
          clearClients();
          navigation.navigate('home');
        }}
      >
        <InterText style={{ fontSize: 14, color: '#EC6724' }} weight="bold">
          Limpar clientes selecionados
        </InterText>
      </TouchableOpacity>
    </View>
  );
}
