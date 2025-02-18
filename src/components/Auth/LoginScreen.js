// LoginScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      await AsyncStorage.setItem('userEmail', email);
      console.log('Email saved:', email); // Debugging step
      navigation.navigate('Home'); // Ensure this is correctly navigating to 'Home'
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <Image source={require('../../../assets/locks.jpg')} style={styles.image} />
            <Text style={styles.title}>Welcome back :)</Text>
            <View style={styles.underline} />

            {/* Email Input with Icon */}
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={22} color="#777" style={styles.icon} />
              <TextInput
                placeholder="Email Address"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Input with Icon */}
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={22} color="#777" style={styles.icon} />
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>
              Don't have an account?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>

            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot password?
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 62,
    padding: 20,
  },
  image: {
    width: 150,
    height: 145,
    marginBottom: 20,
    opacity: 0.9,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  underline: {
    width: 300,
    height: 4,
    backgroundColor: '#FF6347',
    borderRadius: 2,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
  link: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF6347',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
