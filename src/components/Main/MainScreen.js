import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainScreen = () => {
  return (
    <ScrollView 
      style={styles.scrollContainer} 
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true} // Prevents nested ScrollView conflicts
    >
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <TouchableOpacity>
            <Icon name="bell" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
          />
          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        </View>

        {/* Now Playing Section */}
        <View style={styles.rowContainer}>
          <Text style={styles.nowPlaying}>Now Playing</Text>
          <Text style={styles.seeAll}>See all &gt;</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/Frame 407.png')} // Ensure the path is correct
            style={styles.image}
          />
        </View>

        {/* Coming Soon Section */}
        <View style={styles.rowContainer}>
          <Text style={styles.nowPlaying}>Coming Soon</Text>
          <Text style={styles.seeAll}>See all &gt;</Text>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.imageScroll}
        >
          <Image source={require('../../../assets/Card Phim.png')} style={styles.imagelist} />
          <Image source={require('../../../assets/card move.png')} style={styles.imagelist} />
          <Image source={require('../../../assets/Card Phim.png')} style={styles.imagelist} />
          <Image source={require('../../../assets/card move.png')} style={styles.imagelist} />
        </ScrollView>

        {/* Promo & Discount Section */}
        <View style={styles.rowContainer}>
          <Text style={styles.nowPlaying}>Promo & Discount</Text>
          <Text style={styles.seeAll}>See all &gt;</Text>
        </View>

        <View>
          <Image
            source={require('../../../assets/promo.png')} // Ensure the path is correct
            style={styles.promoImage}
          />
        </View>

        {/* Services Section */}
        <View style={styles.rowContainer}>
          <Text style={styles.nowPlaying}>Services</Text>
          <Text style={styles.seeAll}>See all &gt;</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          <Image source={require('../../../assets/Frame 315.png')} style={styles.serviceImage} />
          <Image source={require('../../../assets/Frame 415.png')} style={styles.serviceImage} />
          <Image source={require('../../../assets/Frame 416.png')} style={styles.serviceImage} />
          <Image source={require('../../../assets/Frame 417.png')} style={styles.serviceImage} />
        </ScrollView>

        <View style={styles.rowContainer}>
          <Text style={styles.nowPlaying}>Movies news</Text>
          <Text style={styles.seeAll}>See all &gt;</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ending}>
          <Image source={require('../../../assets/Frame 420.png')} style={styles.news} />
         
          <Image source={require('../../../assets/Frame 421.png')} style={styles.news} />
        </ScrollView>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  nowPlaying: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  seeAll: {
    fontSize: 16,
    color: '#FFA500',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageScroll: {
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  imagelist: {
    width: 170,
    height: 300,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  promoImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
  serviceImage: {
    width: 90,
    height: 130,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  news:{
    width:220,
    marginTop:20,
    gap:20,
    height:200,
    marginRight:20
  },
  ending:{
    height:250,
  }
});

export default MainScreen;
