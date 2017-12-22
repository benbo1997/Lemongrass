import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import myStyles from '../../Styles';

export default class PurposeQuestion extends Component {
  static navigationOptions = {
    title: 'PurposeQ',
    header: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params);
    return (
        <View style={myStyles.container}>
          <Text style={myStyles.plaintext}>What is the main purpose behind your investment:</Text>
          <View style={myStyles.buttoncontainer}>
            <Button
                onPress = {() => {
                  navigate('RiskQ', {purpose: "College"});
                }}
                title = "College"
            />
            <Button
                onPress = {() => {
                  navigate('RiskQ', {purpose: "Bank alternative"});
                }}
                title = "Bank alternative"
            />
            <Button
                onPress = {() => {
                  navigate('RiskQ', {purpose: "Retrieval"});
                }}
                title = "Retrieval"
            />
          </View>
        </View>
    );
  }
}