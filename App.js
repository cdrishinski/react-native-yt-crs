/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state={}
    this.state.customStyles = {
      color: 'red'
    }

    setInterval(() => {
      if(this.state.customStyles.color === 'red'){
        this.setState({
          customStyles: {
           color: 'green' 
          }
        })
      } else {
        this.setState({
          customStyles: {
           color: 'red' 
          }
        })
      }
      
    }, 1000)
  }

  render() {

    const text = <Text style={[styles.welcome, this.state.customStyles]}>Hello World</Text>


    return (
      <View style={styles.container}>

        {text}        
        <Image
          style={styles.imageStyles} 
          source={{
          uri: 'https://images.unsplash.com/photo-1452274381522-521513015433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }} />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageStyles: {
    height: 100,
    width: 100
  }
});
