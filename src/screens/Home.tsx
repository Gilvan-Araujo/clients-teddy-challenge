import { View } from 'react-native';

import PaginationComponent from '../components/Pagination';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <PaginationComponent />
    </View>
  );
}
