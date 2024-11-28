import { View } from 'react-native';

import PaginationComponent from '../components/Pagination';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <PaginationComponent
        data={Array.from({ length: 100 }, (_, i) => i + 1)}
      />
    </View>
  );
}
