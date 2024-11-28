import { TouchableOpacity } from 'react-native-gesture-handler';

import { View } from 'react-native';

import EditIcon from '../../assets/edit.svg';
import PlusIcon from '../../assets/plus.svg';
import TrashIcon from '../../assets/trash.svg';
import InterText from './InterText';

export const Card = () => {
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
          Eduardo
        </InterText>
        <InterText style={{ fontSize: 14, lineHeight: 17 }}>
          Salário: R$ 3.500,00
        </InterText>
        <InterText style={{ fontSize: 14, lineHeight: 17 }}>
          Empresa: R$ 120.000,00
        </InterText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
