import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export const colors = {
  lemongreen: '#86c232',
  lemontext: '#e9ecef'
}

export default styles = StyleSheet.create({
  plaintext: {
    color: 'blue',
    fontSize: 18,
  },
  subtitle: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listitem: {
    paddingLeft:20,
    width: width,
  },
  optionlist: {
    paddingTop:10,
    flex: 1,
  },
  homecontainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
