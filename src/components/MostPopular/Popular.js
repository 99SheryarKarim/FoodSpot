import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Popular = () => {
  // Sample data for most popular items
  const popularItems = [
    { id: '1', title: 'Sashimi', imageUrl: require('../../../assets/foods/popdish1.jpg') },
    { id: '2', title: 'Green Curry', imageUrl: require('../../../assets/foods/popdish2.jpg') },
    { id: '3', title: 'Curry', imageUrl: require('../../../assets/foods/popdish3.jpg') },
    { id: '4', title: 'Apple Pie', imageUrl: require('../../../assets/foods/popdish4.jpg') },
    { id: '5', title: 'Clam Chowder', imageUrl: require('../../../assets/foods/popdish5.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Popular</Text>
      <FlatList
        data={popularItems}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false} // Hides the scrollbars
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Popular;
