import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const handleGoogleLogin = async () => {
  // Simulate Google Login
  const success = true; // Replace with actual authentication logic
  if (success) {
    navigation.replace("MainApp"); // Navigate to main app after successful login
  }
};
const AuthGoog = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MBoOking</Text>
      <Text style={styles.subtitle}>Sign in to explore the best movies!</Text>

      {/* Google Sign-In Button (Navigates to Next Page) */}
      <TouchableOpacity 
  onPress={() => {
    handleGoogleLogin();
    navigation.navigate('MainScreen');
  }} 
  style={styles.googleButton}>
  <Text style={styles.buttonText}>Continue with Google</Text>
</TouchableOpacity>


      {/* Other Sign-In Options (Do Not Navigate) */}
      <TouchableOpacity style={styles.otherButton}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otherButton}>
        <Text style={styles.buttonText}>Continue with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otherButton}>
        <Text style={styles.buttonText}>Continue with Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFA500', // Orange theme
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  googleButton: {
    width: '90%',
    backgroundColor: '#FFA500', // Orange Theme
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  otherButton: {
    width: '90%',
    backgroundColor: '#222', // Dark gray for other buttons
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default AuthGoog;
