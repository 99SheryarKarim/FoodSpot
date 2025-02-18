import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For star icons
import Popular from '../MostPopular/Popular'; // Importing Popular component

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Function to show alert
const showMenuAlert = () => {
  Alert.alert("Notice", "Please explore the menu!");
};

// Function to show alert when a card is clicked
const showRestaurantAlert = (restaurantName) => {
  Alert.alert(
    "Restaurant Selected",
    `You clicked on ${restaurantName}. Please explore the menu!`
  );
};


const PopularRestaurants = () => {
  const restaurants = [
    { id: 1, name: 'The Food Palace', image: require('../../../assets/foods/foodpalace.webp'), rating: 4.9, type: 'Western foods' },
    { id: 2, name: 'Taste of Italy', image: require('../../../assets/foods/tasteitaly.jpg'), rating: 4.3, type: 'Italian foods' },
    { id: 3, name: 'Bakery', image: require('../../../assets/foods/bakery.jpg'), rating: 5.0, type: 'Arabic foods' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Restaurants</Text>
        <TouchableOpacity onPress={showMenuAlert} style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {restaurants.map((restaurant) => (
          <TouchableOpacity key={restaurant.id} onPress={() => showRestaurantAlert(restaurant.name)} style={styles.card}>
            <Image source={restaurant.image} style={styles.image} />
            <Text style={styles.cardText}>{restaurant.name}</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{restaurant.rating} - {restaurant.type}</Text>
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Add the Popular component after the restaurants */}
        <Popular />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: screenHeight < 700 ? 150 : 200, // Adjust the height based on screen size
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginLeft: 5,
  },
});

export default PopularRestaurants;
