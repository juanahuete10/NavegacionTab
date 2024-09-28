import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 

// Cambia el nombre de la importación conflictiva
import DetailHome from './Screen/DetailHome';  // Renombrado para evitar conflicto
import Home from './Screen/Home';  // Mantén esta como la pantalla principal
import InversionistaDashboard from './Screen/InversionistaDashboard';
import InversionistaPerfil from './Screen/InversionistaPerfil';
import Login from './Screen/Login';
import InversionistaForm from './Screen/InversionistaForm';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{ 
        tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home}  
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name='InversionistaDashboard' 
        component={InversionistaDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dashboard" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name='InversionistaPerfil' 
        component={InversionistaPerfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen 
        name='DetailHome' 
        component={DetailHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name='InversionistaForm' 
        component={InversionistaForm}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="edit" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name='Login' 
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-in" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
