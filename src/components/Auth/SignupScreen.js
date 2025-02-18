import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import icons

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <Text style={styles.title}>Sign Up</Text>

          {/* Full Name Input */}
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#777" style={styles.icon} />
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              placeholderTextColor="#777"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Icon name="mail" size={20} color="#777" style={styles.icon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="#777"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#777" style={styles.icon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true}
              placeholderTextColor="#777"
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Fixed Text Issue */}
          <View style={styles.footerTextContainer}>
            <Text style={styles.subtitle}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}> Log In</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
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
  footerTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  link: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
