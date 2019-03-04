import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Profile from './src/Profile';

export default class App extends Component {

  state = {
    text: 'hello',
    data: ''
  }

  getNextValue(text) {
    return text + '!!!';
  }

  setStateFunction(text) {
    this.setState({ text: text + '!!!' });
  }

  change(text) {
    this.setState({data: text})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          testID={'username'}
          onChangeText={(text) => this.change(text)}
          style={{ backgroundColor: 'gray', marginBottom: 15, width: '80%' }}
          placeholder="Enter Username"
        />
        <TextInput
          testID={'password'}
          onChangeText={(text) => this.change(text)}
          style={{ backgroundColor: 'red', width: '80%' }}
          placeholder="Enter Password"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    width: '80%',
    height: 50,
    marginTop: 70,
    color: "#000"
  }
});
