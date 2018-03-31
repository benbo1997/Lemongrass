import React from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
export const colors = {
  lemongreen: '#86c232',
  lemondarkgreen: '#61892F',
  lightgrey: '#e9ecef',
  darkgrey: '#cccccc',
  sky: '#7CD8D5',
  electric: '#4cdef5',
  cyan: '#62EDD6',
  aqua: '#008F95',
  ink: '#062F4F',
  azure: '#01ABAA',
  violet: '#9c3f95',
  teal: '#07889b',
  background: '#bf5bb5',
  shadow: '#1b1b1b',
  wrong: '#b30000',
  gold: '#ffcc00',
};

let font = Platform.OS === "android" ? 'Roboto' :'Avenir';


export default styles = StyleSheet.create({
  header: {
    backgroundColor: colors.lemongreen,
  },
  headertitle: {
    color: colors.lightgrey,
    fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'Avenir',
    fontSize: Platform.OS === "android" ? 14 : 14,
  },
  plaintext: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 24,
  },
  questiontext: {
    fontSize: 24,
    padding: 50,
    fontFamily: font,
  },
  resulttext: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
    fontFamily: font,
  },
  buttontext: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    fontFamily: font,
  },
  buttontextPress: {
    fontSize: 18,
    color: colors.lemongreen,
    textAlign: 'center',
    fontFamily: font,
  },
  listitem: {
    backgroundColor: colors.lightgrey,
    margin: 2,
    padding: 20,
    width: width - 10,
    shadowOffset:{width: 0, height:1},
    shadowColor:'#000',
    shadowRadius: 1,
    shadowOpacity:.1,
    elevation: 1,
  },
  learnitem: {
    backgroundColor: colors.lightgrey,
    margin: 2,
    padding: 20,
    width: width - 10,
    shadowOffset:{width: 0, height:1},
    shadowColor:'#000',
    shadowRadius: 1,
    shadowOpacity:.1,
    elevation: 1,
  },
  learnitemtext: {
    fontFamily: Platform.OS === "android" ? 'Roboto' :'Helvetica-Light',
    fontSize: 24,
    color: '#455a64',
    textAlign: 'left',
  },
   learnitemplaintext: {
    fontFamily: Platform.OS === "android" ? 'Roboto' :'Helvetica-Light',
    fontSize: 16,
    color: '#90a4ae',
    textAlign: 'left',
  },
  learnsection: {
    flex:1,
    // width:(width +1),
    padding: 50,
    margin: 5,
    backgroundColor: '#58704b',
  },
  learnsectiontitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontFamily: font,
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
    backgroundColor: '#ffffff',
    margin: 5,
  },
  button: {
    backgroundColor: colors.lightgrey,
    width: (width - 100),
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    alignContent: 'center',
    flexDirection: 'column',
    shadowOffset:{width: 1, height:1},
    shadowColor: colors.shadow,
    shadowRadius: 3,
    shadowOpacity:.2,
    elevation: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightgrey,
  },
  submitButton:{
    alignItems: 'center',
    paddingBottom: 60,
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
  hintContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
