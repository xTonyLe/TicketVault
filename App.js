import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, {useState} from 'react';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Image = require('./assets/concert.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ticket Vault</Text>
      <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Number of Tickets"
        name="ticket"
        id="ticket"
      />
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title='Find The Cost'
        onPress={ () => {
          
        }}
      />
      </View>
      <Text>Ticket Cost: </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 500,
  },
  textInputContainer: {
    height: 40,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'pink',
  }
});
