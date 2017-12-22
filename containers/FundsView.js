import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NewsFeed } from '../components/NewsFeed';
import myStyles, {colors} from '../Styles';

export default class FundsView extends Component {
  static navigationOptions = {
    title: 'Funds',
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
  }

  constructor(props) {
    super(props);
    this.state = {text: "Hello"};
  }

  navigateToListItem(params) {
    this.props.navigation.navigate('Info', params);
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
        <View style={myStyles.container}>
          <NewsFeed onRowPress={(params) => {this.navigateToListItem(params)}}></NewsFeed>
          <Text style={myStyles.plaintext}>{this.state.text}</Text>
          <Button
              onPress = {() => {
                navigate('Info', {title: 'Ben'});
                this.setState({text: "Boop"})
              }}

              title = "Press me!"
          />
        </View>
    );
  }
}