import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const fadeAnim = new Animated.Value(0); // Initial opacity for animation

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1, // Fully visible
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [currentPage]);

  const onboardingContent = [
    {
      image: require('../../assets/1613493165638.jpeg'), // Ensure the path is correct
      title: 'Delicious Food',
      subtitle: 'Explore the best food options nearby and get your favorite dishes delivered to your door.',
    },
  ];

  const onNext = () => {
    navigation.navigate('Onboarding2');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Image
        source={onboardingContent[currentPage].image}
        style={[
          styles.image,
          {
            opacity: fadeAnim, // Bind opacity to animation value
          },
        ]}
      />
      <Text style={styles.title}>{onboardingContent[currentPage].title}</Text>
      <Text style={styles.subtitle}>{onboardingContent[currentPage].subtitle}</Text>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
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
    borderRadius: 125, // Makes the image oval-shaped
    resizeMode: 'cover',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#FF6347', // Add a border for aesthetic
    opacity: 0.9, // Add a slight fade effect
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
    backgroundColor: '#FF6347', // Tomato color
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

export default OnboardingScreen;
