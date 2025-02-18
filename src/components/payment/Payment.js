import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  Animated, 
  Image, 
  ActivityIndicator, 
  Modal 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handlePayment = () => {
    if (!email || !cardNumber || !expiry || !cvv || !amount) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('Home');
        }, 2000);
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Payment Logos */}
        <View style={styles.paymentLogosContainer}>
          <Image source={require('../../../assets/visa.jpg')} style={styles.logo} />
          <Image source={require('../../../assets/patmm.jpg')} style={styles.logo} />
          <Image source={require('../../../assets/paypal.webp')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Secure Payment</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Card Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        {/* Expiry & CVV */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry (MM/YY)"
            value={expiry}
            onChangeText={setExpiry}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry
            value={cvv}
            onChangeText={setCvv}
          />
        </View>

        {/* Amount Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton} onPress={handlePayment} disabled={loading}>
          {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.payText}>Pay Now</Text>}
        </TouchableOpacity>
      </View>

      {/* Payment Success Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons name="check-circle" size={60} color="green" />
            <Text style={styles.successText}>Payment Successful!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  paymentLogosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 40,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  payButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  payText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  successText: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default PaymentScreen;
