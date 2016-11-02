import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  selectedButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
     height: 50,
     padding: 4,
     marginRight: 5,
     fontSize: 23,
     borderWidth: 1,
     borderColor: 'white',
     borderRadius: 8,
     color: 'white'
 },
})
//TODO: change styles when each button is selected
export default class ExpenseSetUp extends Component {
  constructor(){
    super()
    this.state = {
      housing: false,
      auto: false,
      insurance: false,
      utilities: false
    }
  }
  render() {
    let color = styles.button
    console.log(color)
    console.log('in the console')
    if (this.state.housing === true){
      color=styles.selectedButton
    }
    return (
      <View style = {styles.container}>
      <Text> Select all recurring expenses. Amounts will be entered on the next page.</Text>
        <TouchableHighlight
          style={color}
          underlayColor='black'
          >
          <Text style={styles.buttonText} >Rent/Mortgage</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='black'
          >
          <Text style={styles.buttonText} >Auto</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='black'
          >
          <Text style={styles.buttonText} >Insurance</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='black'
          >
          <Text style={styles.buttonText} >Utilities</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor='black'
          >
          <Text style={styles.buttonText} >Continue</Text>
        </TouchableHighlight>

    </View>
    )
  }
}
