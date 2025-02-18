import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const DisplayPhoto = ({ photoUri }) => {
  if (!photoUri) {
    return (
      //  note: u have to run the code in web and andriod by cable only
      <View style={styles.placeholder}>
        <Text style={styles.innerText}>helo Photo Selected</Text>
      </View>
    );
  }

  return <Image source={{ uri: photoUri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  placeholder: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  innerText: {
    color: '#721c24', // Dark red text for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default DisplayPhoto;
