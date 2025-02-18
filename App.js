import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

// Screens
import OnboardingScreen from './src/screens/OnboardingScreen';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import LoginScreen from './src/components/Auth/LoginScreen';
import SignupScreen from './src/components/Auth/SignupScreen';
import HomeScreen from './src/components/Home/HomeScreen';
import Menu from './src/components/Menu/Menu';
import ProfileScreen from './src/components/Profile/ProfileScreen';
import Foods from './src/components/Foods/Food';
import Beverages from './src/components/Beverages/Beverages';
import Desserts from './src/components/Desserts/Deserts';
import Promotions from './src/components/Promotions/Promotions';
import FoodDisplay from './src/components/ItemDisplay/FoodDisplay';
import PaymentScreen from './src/components/payment/Payment';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Header Title
const CustomHeaderTitle = () => (
  <Text
    style={{
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FF6347',
      letterSpacing: 1,
      textTransform: 'uppercase',
    }}
  >
    FoodSpot 🍽️
  </Text>
);

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const renderHeaderRight = () => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
      onPress={() => alert('Go to Cart')}
    >
      <MaterialIcons name="shopping-cart" size={28} color="#FF6347" />
      {cartCount > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -5,
            right: -5,
            backgroundColor: 'red',
            borderRadius: 10,
            paddingHorizontal: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 14 }}>{cartCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()}
            >
              <MaterialIcons name="menu" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerRight: renderHeaderRight,
          headerTitle: () => <CustomHeaderTitle />,
        })}
      />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Foods">
        {() => <Foods handleAddToCart={handleAddToCart} />}
      </Stack.Screen>
      <Stack.Screen name="Beverages" component={Beverages} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Desserts" component={Desserts} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Promotions" component={Promotions} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="FoodDisplay" component={FoodDisplay} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerTitle: () => <CustomHeaderTitle />, headerRight: renderHeaderRight }} />
    </Stack.Navigator>
  );

  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#fff', width: 240 },
        drawerActiveTintColor: '#FF6347',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        options={{
          drawerLabel: 'Logout',
          drawerIcon: () => <MaterialIcons name="exit-to-app" size={24} color="gray" />,
          drawerActiveTintColor: '#FF6347',
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
