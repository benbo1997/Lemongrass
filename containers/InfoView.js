import React, { Component } from 'react';
import { Text, View } from 'react-native';
import myStyles, {colors} from '../Styles';

export default class InfoView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: myStyles.header,
    headerTitleStyle: myStyles.headertitle,
  });

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text style={myStyles.subtitle}>Info about {params.title}</Text>
      </View>
    )
  }
}
