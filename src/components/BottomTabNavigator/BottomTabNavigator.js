import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../components/Main/MainScreen';
import TicketScreen from '../components/Tickets/TicketScreen';
import MovieScreen from '../components/Movies/MovieScreen';
import ProfileScreen from '../components/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000', height: 60, borderTopWidth: 0 },
        tabBarActiveTintColor: '#FFA500',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={MainScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} /> 
        }} 
      />
      <Tab.Screen 
        name="Ticket" 
        component={TicketScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="ticket" color={color} size={size} /> 
        }} 
      />
      <Tab.Screen 
        name="Movie" 
        component={MovieScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="film" color={color} size={size} /> 
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} /> 
        }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
