import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Desserts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Desserts</Text>
      <Button title="Back to Menu" onPress={() => navigation.goBack()} />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
  });
  
export default Desserts;
