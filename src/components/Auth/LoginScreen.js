import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Image, 
  Text, 
  TouchableOpacity, 
  Modal, 
  FlatList, 
  Dimensions 
} from 'react-native';

const handleLogin = () => {
  // Simulate successful login
  if (email === 'test@example.com' && password === 'password') {
    navigation.replace("MainApp"); // Navigate to the main app after login
  } else {
    alert("Invalid credentials");
  }
};



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'Urdu', 'Spanish', 'French', 'German'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headone}>
          <Image
            source={require('../../../assets/shedyy.png')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.headtwo}>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.languageText}>{selectedLanguage}</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <FlatList
                  data={languages}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.languageOption}
                      onPress={() => {
                        setSelectedLanguage(item);
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.languageOptionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>

      {/* Welcome Image */}
      <View style={styles.welcome}>
        <Image
          source={require('../../../assets/welcome.png')}
          style={styles.welcomeImage}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('AuthGoog')}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => console.log('Sign up')}
        >
          <Text   onPress={handleLogin} style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By signing up or logging in, you agree to our Terms of Service{'\n'}and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    width: '100%',
    height: 60,
    marginTop: 40,
    flexDirection: 'row',
  },
  headone: {
    width: '50%',
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtwo: {
    width: '50%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 90,
    resizeMode: 'contain',
  },
  languageButton: {
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  languageText: {
    color: 'white',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    width: 120,
    elevation: 5,
    marginLeft: 190,
    marginTop: 70,
    borderWidth: 1,
    borderColor: 'white',
  },
  languageOption: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  languageOptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  welcome: {
    width: screenWidth,
    height: screenHeight * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: '90%',
    height: '90%',
    marginTop: 40,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 20,
    width: screenWidth,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FCC434',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  termsText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
