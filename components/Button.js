import React, { Component } from 'react';
import { Text, View, SectionList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../Styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={myStyles.button}>
        <TouchableHighlight
            onPress={this.props.onPress}
            underlayColor={colors.lightgrey}
            activeOpacity={50}>
          <Text style={myStyles.buttontext}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}