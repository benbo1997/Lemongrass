import React, { Component } from 'react';
import {Image, Platform, Text, View} from 'react-native';
import myStyles, {colors} from '../Styles';
import BackButton from "../components/BackButton";

export default class InfoView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  });


  render() {
    const {params} = this.props.navigation.state;
    // TODO remove hardcoded styles as in QuizReportView
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={{flex: .5, backgroundColor: '#fff'}} >
        </View>
        <View style={{flex: .4, backgroundColor: '#fff'}} >
          <Text style={{
            fontSize: 40,
            fontFamily: Platform.OS === "android" ? 'Roboto' :'Helvetica-Light',
            paddingLeft: 20,
            textAlignVertical: 'center'
          }}>
            All about that
          </Text>
        </View>
        <View style={{flex: .3, backgroundColor: '#fff'}} >
          <Text style={{
            fontSize: 14,
            fontFamily: Platform.OS === "android" ? 'serif' :'Didot-Italic',
            paddingLeft: 20,
            textAlignVertical: 'center'
          }}>
            Top choice
          </Text>
        </View>
        <View style={{
          flex: 1.2,
          backgroundColor: '#fff'
        }} >
          <Image
            style={{
              flex: 1,
              width:390,
              height:310
            }}
            source={require('../resources/images/forest.jpeg')}
          />
        </View>
        <View style={{flex: 1.8,
          backgroundColor: '#fff',
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20
        }} >
            <Text style={{
              fontFamily: Platform.OS === "android" ? 'sans-serif-light' :'AvenirNext-UltraLightItalic',
              textAlign: 'center',
              textAlignVertical: 'center'
            }}>
              Info about the {params.title}.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
      </View>
    )
  }
}
