import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NewsFeed } from '../components/NewsFeed';
import myStyles, {colors} from '../Styles';
import BackButton from "../components/BackButton";

export default class FundsView extends Component {
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