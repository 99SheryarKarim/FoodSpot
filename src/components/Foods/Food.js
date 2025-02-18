import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Foods = ({ handleAddToCart, cartCount }) => {
  const navigation = useNavigation();

  const foodCategories = [
    "New Dishes", "Favorites", "Variety", "Best Sellers", "Fast Food", "Healthy", "Specials", "Drinks"
  ];

  const foodItems = [
    { id: 1, name: "Cheese Burger", description: "Juicy grilled burger with melted cheese.", image: require("../../../assets/foods/popdish1.jpg"), price: "PKR 350" },
    { id: 2, name: "Pepperoni Pizza", description: "Crispy thin crust with spicy pepperoni.", image: require("../../../assets/foods/popdish2.jpg"), price: "PKR 900" },
    { id: 3, name: "Grilled Chicken", description: "Healthy grilled chicken with fresh veggies.", image: require("../../../assets/foods/popdish3.jpg"), price: "PKR 750" },
    { id: 4, name: "Pepperoni Pizza", description: "Crispy thin crust with spicy pepperoni.", image: require("../../../assets/foods/popdish2.jpg"), price: "PKR 900" },
    { id: 5, name: "Grilled Chicken", description: "Healthy grilled chicken with fresh veggies.", image: require("../../../assets/foods/popdish3.jpg"), price: "PKR 750" },
  ];

  const [cart, setCart] = useState({});

  const increaseQuantity = (id) => {
    setCart((prev) => {
      const newCart = { ...prev, [id]: (prev[id] || 0) + 1 };
      if (handleAddToCart) handleAddToCart();
      return newCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      if (!prev[id] || prev[id] === 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const handleImagePress = (foodId) => {
    navigation.navigate('FoodDisplay', { foodId });
  };

  return (
    <Animatable.View animation="fadeInUp" duration={800} easing="ease-in-out" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <Animatable.View animation="fadeInDown" duration={600} style={styles.searchBar}>
            <Ionicons name="search" size={20} color="orange" style={styles.searchIcon} />
            <TextInput placeholder="Search..." style={styles.searchInput} placeholderTextColor="orange" />
          </Animatable.View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {foodCategories.map((category, index) => (
            <Animatable.View key={index} animation="zoomIn" duration={500} delay={index * 100}>
              <TouchableOpacity style={styles.categoryItem}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </ScrollView>

        <View style={styles.foodList}>
          {foodItems.map((food, index) => (
            <Animatable.View key={food.id} animation="fadeInRight" duration={600} delay={index * 200}>
              <View style={styles.foodItem}>
                <TouchableOpacity onPress={() => handleImagePress(food.id)}>
                  <Image source={food.image} style={styles.foodImage} />
                </TouchableOpacity>
                <View style={styles.foodDetails}>
                  <Text style={styles.foodName}>{food.name}</Text>
                  <Text style={styles.foodDescription}>{food.description}</Text>
                  <Text style={styles.foodPrice}>{food.price}</Text>
                </View>
                <View style={styles.cartActions}>
                  <TouchableOpacity style={styles.cartButton} onPress={() => increaseQuantity(food.id)}>
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => decreaseQuantity(food.id)}>
                      <Ionicons name="remove-circle" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{cart[food.id] || 0}</Text>
                    <TouchableOpacity onPress={() => increaseQuantity(food.id)}>
                      <Ionicons name="add-circle" size={24} color="green" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animatable.View>
          ))}
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 45,
    width: "100%",
    borderWidth: 2,
    borderColor: "orange",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  categoryScroll: {
    marginTop: 5,
    flexDirection: "row",
  },
  categoryItem: {
    backgroundColor: "#FF8C00",
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  foodList: {
    marginTop: 15,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  foodDescription: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF8C00",
  },
  cartActions: {
    alignItems: "center",
  },
  cartButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 5,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
});


export default Foods;
