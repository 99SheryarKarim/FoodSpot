import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Menu = ({ navigation }) => {
  const menuOptions = [
    { id: 1, title: "Foods", image: require("../../../assets/foods/food1.jpg"), screen: "Foods" },
    { id: 2, title: "Beverages", image: require("../../../assets/foods/food2.jpg"), screen: "Beverages" },
    { id: 3, title: "Desserts", image: require("../../../assets/foods/food3.jpg"), screen: "Desserts" },
    { id: 4, title: "Promotions", image: require("../../../assets/foods/food4.jpg"), screen: "Promotions" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Animatable.View animation="fadeInDown" duration={600} style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#FFD700" style={styles.searchIcon} />
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            placeholderTextColor="#FFD700"
          />
        </Animatable.View>
      </View>

      {/* Menu Options */}
      <View style={styles.container}>
        <View style={styles.partTwo}>
          {menuOptions.map((option, index) => (
            <Animatable.View
              key={option.id}
              animation="fadeInUp"
              delay={index * 200}
              duration={600}
            >
              <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate(option.screen)}
                activeOpacity={0.7}
              >
                <Image source={option.image} style={styles.icon} />
                <Text style={styles.optionText}>{option.title}</Text>
                <Ionicons name="chevron-forward" size={24} color="#FFD700" />
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: "#FFCBA4", // Light Peach background
    padding: 10,
  },
  searchContainer: {
    alignItems: "center",
    
    marginBottom: 25,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2725B", // Dark Coral for better contrast
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 20, // Use a number for marginTop
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFD700", // Gold border for elegance
  },
  
  searchIcon: {
    marginRight: 8,
    color: "#FFD700", // Gold icon for consistency
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF", // White text for readability
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  partTwo: {
    width: "100%",
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E2725B", // Dark Coral for menu items
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#FFD700", // Gold shadow for elegance
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    transform: [{ scale: 1 }],
  },
  optionText: {
    fontSize: 18,
    color: "#FFD700", // Gold text for elegance
    flex: 1,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 10,
  },
});


export default Menu;
