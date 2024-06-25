import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const App = () => {
  const onPressHandler = () => {
    Alert.alert('Hello');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Press the button below!</Text>
      <Button title="Press me" onPress={onPressHandler} />
    </View>
  );
};

export default App;
