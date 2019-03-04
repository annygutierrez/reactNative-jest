import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Profile from './src/Profile';

export default class App extends Component {

  state = {
    text: 'hello'
  }

  getNextValue(text) {
    return text + '!!!';
  }

  setStateFunction(text) {
    this.setState({ text: text + '!!!' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Write some code'
          style={styles.input}
          value={this.state.text}
          onChangeText={(text) => this.setStateFunction(text)} />
        <Profile />
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
