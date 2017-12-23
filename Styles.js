import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export const colors = {
  lemongreen: '#86c232',
  lemondarkgreen: '#61892F',
  lightgrey: '#e9ecef',
  sky: '#7CD8D5',
  electric: '#4cdef5',
  cyan: '#62EDD6',
  aqua: '#008F95',
  ink: '#062F4F',
  azure: '#01ABAA',
  violet: '#6E3667',
  teal: '#07889b',
  background: '#6e3667',
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
    color: '#fff',
    textAlign: 'center',
  },
  listitem: {
    width: width,
  },
  optionlist: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
  },
  twoButtonText: {
    padding:5,
    color: '#fff',
    fontSize:18,
  },
  twoButtonDesc: {
    padding:5,
    fontSize:14,
    color: '#111'
  },
  twoButtonOuter: {
    width:(width - 20),
    backgroundColor: colors.lemongreen,
    margin:5,
    elevation: 3,
  },
  twoButtonUpper: {
    backgroundColor: colors.lemongreen,
    margin: 5,
  },
  twoButtonLower: {
    backgroundColor: '#fff',
    margin: 5,
  },
  button: {
    backgroundColor: colors.lemongreen,
    width: (width - 100),
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    alignContent: 'center',
    flexDirection: 'column',
    shadowOffset:{width: 10, height:10},
    shadowColor:'#000',
    shadowRadius: 5,
    shadowOpacity:1.0,
    elevation: 3,
  },
  buttoncontainer:{
    flexDirection: 'column',
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
  },
  homecontainer:{
    flex: 1,
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
