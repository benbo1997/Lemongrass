import React, { Component } from 'react';
import { Text, View } from 'react-native';
import myStyles, {colors} from '../Styles';

export default class InfoView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: colors.lemongreen
    },
    headerTitleStyle: {
      color: colors.lemontext
    }
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
