import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export const colors = {
  lemongreen: '#86c232',
  lemondarkgreen: '#61892F',
  lightgrey: '#e9ecef',
}

export default styles = StyleSheet.create({
  header: {
    backgroundColor: colors.lemongreen,
  },
  headertitle: {
    color: colors.lightgrey,
  },
  plaintext: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 24,
  },
  buttontext: {
    fontSize: 24,
    color: colors.lightgrey,
  },
  listitem: {
    width: width,
  },
  optionlist: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.lemongreen,
    width: (width - 100),
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    alignContent: 'center',
    flexDirection: 'column',
  },
  buttoncontainer:{
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  homecontainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    padding:5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
