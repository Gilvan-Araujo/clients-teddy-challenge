import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { CURRENT_PAGE_COLLECTION } from '@storage/storageConfig';

import { Card } from './Card';
import InterText from './InterText';

const PaginationComponent = ({ data }) => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPage = async () => {
      const savedPage = await AsyncStorage.getItem(CURRENT_PAGE_COLLECTION);
      if (savedPage) setCurrentPage(Number(savedPage));
    };
    loadPage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CURRENT_PAGE_COLLECTION, currentPage.toString());
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const visibleData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage === 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage > totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage === totalPages - 2) {
        pageNumbers.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pageNumbers.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        );
      }
    }
    return pageNumbers;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <InterText weight="bold" style={styles.itemCount}>
          {data.length}{' '}
        </InterText>
        <InterText style={styles.itemCount}>clientes encontrados:</InterText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          height: 40,
          marginTop: 10,
        }}
      >
        <InterText style={styles.itemCount}>Clientes por página: </InterText>

        <Picker
          selectedValue={itemsPerPage}
          onValueChange={(value) => setItemsPerPage(Number(value))}
          style={{ width: 100, marginTop: -12.5 }}
        >
          <Picker.Item label="4" value="4" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="16" value="16" />
        </Picker>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={visibleData}
          contentContainerStyle={{ gap: 20 }}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={() => <Card />}
        />

        <TouchableOpacity
          style={{
            alignSelf: 'center',

            width: '100%',
            padding: 11,
            borderColor: '#EC6724',
            borderWidth: 2,
            borderRadius: 4,

            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <InterText
            style={{
              textAlign: 'center',
              color: '#EC6724',
            }}
            weight="bold"
          >
            Criar cliente
          </InterText>
        </TouchableOpacity>

        <View style={styles.pagination}>
          {generatePageNumbers().map((page, index) =>
            page === '...' ? (
              <InterText key={index} style={styles.pageText}>
                ...
              </InterText>
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => paginate(page)}
                style={[
                  styles.pageNumber,
                  page === currentPage && styles.currentPage,
                ]}
              >
                {page === currentPage ? (
                  <InterText style={styles.currentPageText}>{page}</InterText>
                ) : (
                  <InterText style={styles.pageText}>{page}</InterText>
                )}
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    </View>
  );
};

export default PaginationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  itemCount: {
    fontSize: 18,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderColor: '#EC6724',
    width: 35,
    height: 35,
  },
  currentPage: {
    backgroundColor: '#EC6724',
    borderColor: '#EC6724',
    color: '#fff',
    width: 35,
    height: 35,
    borderRadius: 4,
  },
  pageText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  currentPageText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
