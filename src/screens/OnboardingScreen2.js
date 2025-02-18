import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/1613493165638.jpeg')} // Adjust the image path
        style={styles.image}
      />
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>
        Enjoy the best food experience with just a few clicks. Let’s get started!
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    resizeMode: 'cover',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#FF6347',
    opacity: 0.9,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen2;
