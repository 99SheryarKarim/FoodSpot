import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const FoodDisplay = ({ route }) => {
  const { foodId } = route.params;
  const navigation = useNavigation();

  // Alert functions for buttons
  const addToCart = () => {
    Alert.alert('🛒 Added to Cart', 'This item has been added to your cart.');
  };

  const buyNow = () => {
    navigation.navigate('Payment', { foodId });
  };

  const chatWithSeller = () => {
    Alert.alert('💬 Chat', 'Starting a chat with the seller...');
  };

  const moreOptions = () => {
    Alert.alert('📌 More Options', 'Here are some additional actions.');
  };

  const food = {
    1: { 
      name: 'Tandoori Chicken Pizza', 
      star: '⭐ ⭐ ⭐ ⭐ ⭐', 
      image: require('../../../assets/foods/popdish1.jpg'), 
      description: 'A mouthwatering pizza topped with spicy tandoori chicken, \nmelting cheese, and flavorful herbs. \nPerfectly baked with a crispy crust. \nA delight for spice lovers!', 
      price: 'PKR 350' 
    },
    2: { 
      name: 'Pepperoni Pizza', 
      star: '⭐ ⭐ ⭐ ⭐', 
      image: require('../../../assets/foods/popdish2.jpg'), 
      description: 'A classic favorite with rich tomato sauce, \nthinly sliced spicy pepperoni, and \na crispy golden crust. \nCheese lovers’ dream!', 
      price: 'PKR 900' 
    },
    3: { 
      name: 'Grilled Chicken', 
      star: '⭐ ⭐ ⭐ ⭐ ⭐', 
      image: require('../../../assets/foods/popdish3.jpg'), 
      description: 'Tender and juicy grilled chicken, \nmarinated with fresh herbs and spices. \nServed with a side of crispy vegetables \nand a delicious dip.', 
      price: 'PKR 750' 
    },
  }[foodId];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animatable.View animation="fadeInUp" duration={800} style={styles.container}>
        <Image source={food.image} style={styles.foodImage} />
        
        <Text style={styles.foodName}>{food.name}</Text>

        <View style={styles.starPriceRow}>
          <Text style={styles.foodStar}>{food.star}</Text>
          <Text style={styles.foodPrice}>{food.price}</Text>
        </View>

        <Text style={styles.Maindescr}>Description</Text>
        <Text style={styles.DescText}>{food.description}</Text>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonAddToCart} onPress={addToCart}>
            <Text style={styles.buttonText}>🛒Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBuyNow} onPress={buyNow}>
            <Text style={styles.buttonText}>🚀 Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonChat} onPress={chatWithSeller}>
            <Text style={styles.buttonText}>💬 Chat Seller</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonMore} onPress={moreOptions}>
            <Text style={styles.buttonText}>📌 More</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  foodImage: {
    width: 320,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  starPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  foodStar: {
    fontSize: 18,
    marginRight: 10, 
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  Maindescr: {
    fontSize: 22,
    fontWeight: "900",
    marginTop: 10,
  },
  DescText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  buttonAddToCart: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonBuyNow: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonChat: {
    backgroundColor: '#008080',
    paddingVertical: 10,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonMore: {
    backgroundColor: '#4B0082',
    paddingVertical: 10,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDisplay;
