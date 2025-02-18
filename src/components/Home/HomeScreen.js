import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PS from '../../components/PopularResturants/PS';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const fadeAnim = new Animated.Value(0);

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Failed to fetch email from local storage', error);
      }
    };
    fetchEmail();
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Function to show alert
  const showMenuAlert = () => {
    Alert.alert("Notice", "Please explore the menu!");
  };

  const foodItems = [
    { id: 1, name: 'Sri Lankan', image: require('../../../assets/foods/sirilankan.webp') },
    { id: 2, name: 'Chinese', image: require('../../../assets/foods/chinese.jpeg') },
    { id: 3, name: 'Italian', image: require('../../../assets/foods/italian.webp') },
    { id: 4, name: 'Russian', image: require('../../../assets/foods/russian.jpeg') },
    { id: 5, name: 'Arabic', image: require('../../../assets/foods/arabic.jpeg') },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* User Info Section */}
      {/* <Animated.View style={[styles.userInfo, { opacity: fadeAnim }]}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.welcomeText}>Welcome back,</Text>
       <Text style={styles.emailText}>{email}</Text>
       </View>
        <Text style={styles.coolMessage}>Enjoy exploring delicious meals today!</Text>
      </Animated.View> */}

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={24} color="#FF6347" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search delicious foods..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={showMenuAlert} // Show alert when pressing enter
        />
      </View>

      {/* Food Offers Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselWrapper}>
        {foodItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={showMenuAlert}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Restaurants Section */}
      <PS />

      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.menuButtonText}>Explore the Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  userInfo: {
    backgroundColor: '#FF6347',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
    alignSelf: 'center'
  },
  coolMessage: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    marginTop:30,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    

  },
  carouselWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    width: screenWidth / 2.5,
    alignItems: 'center',
    marginRight:2,
    backgroundColor: '#fff',
    // padding: 10,
    borderRadius: 15,
    elevation: 3,
    margin:5,
    paddingVertical:5
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
    objectFit: 'cover',
    backgroundColor: 'orange'
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuButton: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10, // Adjusted to move it up slightly
  },
});

export default HomeScreen;
