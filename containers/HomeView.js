import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import myStyles from '../Styles';

export default class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
        <View style={myStyles.homecontainer}>
          <Text style={myStyles.plaintext}>Welcome to Lemongrass</Text>
          <Button
              onPress={() =>
                navigate('Learn')
              }
              title="Learn"
          />
          <Button
              onPress={() =>
                navigate('PurposeQ')
              }
              title="Invest"
          />
        </View>
    );
  }
}