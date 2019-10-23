import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
   axios.get('http://dummy.restapiexample.com/api/v1/employees', { 
      headers: {
         'Content-Type': 'application/json',
         Authorization: `token abc`,
      },
      data: {}
   })
      .then(res => {console.log(res)})
      .catch(err => {console.log(err)});

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
