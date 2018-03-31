import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ElementList } from '../components/ElementList';
import myStyles, {colors} from '../Styles';
import BackButton from "../components/BackButton";

export default class ImpactsView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Impact',
    headerStyle: myStyles.header, headerTitleStyle: myStyles.headertitle,
    headerLeft: <BackButton
        onPress={ () => { navigation.goBack() }} />,
  })

  constructor(props) {
    super(props);
    this.state = {text: "Hello"};
  }

  navigateToListItem(params) {
    this.props.navigation.navigate('Funds', params);
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
        <View style={myStyles.container}>
          <ElementList onRowPress={(params) => {this.navigateToListItem(params)}}></ElementList>
          <Text style={myStyles.plaintext}></Text>
        </View>
    );
  }
}