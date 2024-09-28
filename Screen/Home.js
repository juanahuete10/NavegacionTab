import React from 'react';
import { View, Text, Button } from 'react-native'; // Asegúrate de importar estos componentes
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#87CEFA', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate("DetailsHome")} />
    </View>
  );
}
