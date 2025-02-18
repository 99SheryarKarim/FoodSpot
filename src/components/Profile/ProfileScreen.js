import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image 
        source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} 
        style={styles.profileImage} 
      />

      {/* User Name */}
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userEmail}>johndoe@example.com</Text>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="edit" size={24} color="#FF6347" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="history" size={24} color="#FF6347" />
          <Text style={styles.optionText}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="settings" size={24} color="#FF6347" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
