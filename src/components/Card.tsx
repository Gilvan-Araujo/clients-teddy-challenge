import { TouchableOpacity } from 'react-native-gesture-handler';

import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import EditIcon from '@assets/edit.svg';
import MinusIcon from '@assets/minus.svg';
import PlusIcon from '@assets/plus.svg';
import TrashIcon from '@assets/trash.svg';

import InterText from '@components/InterText';

import { useSelectedClients } from '@context/SelectedClientsContext';

import { Client } from './Pagination';

type CardProps = {
  client: Client;
};

export const Card = ({ client }: CardProps) => {
  const route = useRoute();
  const { addClient, removeClient, isClientSelected } = useSelectedClients();

  const toggleSelection = () => {
    if (isClientSelected(client.id)) {
      removeClient(client.id);
    } else {
      addClient(client);
    }
  };

  return (
    <View
      style={{
        height: 138,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ gap: 10, alignItems: 'center' }}>
        <InterText weight="bold" style={{ fontSize: 16, lineHeight: 20 }}>
          {client.name}
        </InterText>

        <InterText style={{ fontSize: 14, lineHeight: 17 }}>
          Salário: R${' '}
          {client.salary.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </InterText>

        <InterText style={{ fontSize: 14, lineHeight: 17 }}>
          Empresa: R${' '}
          {client.companyValuation.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </InterText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: route.name === 'home' ? 'space-between' : 'flex-end',
          width: '100%',
        }}
      >
        <TouchableOpacity onPress={toggleSelection}>
          {isClientSelected(client.id) ? (
            <MinusIcon width={16} height={16} />
          ) : (
            <PlusIcon width={16} height={16} />
          )}
        </TouchableOpacity>

        {route.name === 'home' && (
          <>
            <TouchableOpacity>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <TrashIcon />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
