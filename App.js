import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Button } from 'react-native-paper';

export default function App() {

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      
      <View>
        <Text style={styles.resultado}>25</Text>
        <Text style={styles.diagnostico}>Normal</Text>
      </View>
      
      <View>
        <TextInput style={styles.peso}></TextInput>
        <TextInput style={styles.altura}></TextInput>
        <Button>
          Calcular
        </Button>
      </View>
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  app: {
    padding: 50,
  },
  
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  resultado: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 20,
  },
  
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  
  peso: {
    borderColor: '#000',
    borderWidth: 1,
  },
  
  altura: {
    borderColor: '#000',
    borderWidth: 1,
  }
});
