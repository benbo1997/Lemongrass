import React, { Component } from 'react';
import { Text, View, SectionList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../Styles';

export default class TwoColourButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor={'#fff'}
          activeOpacity={0.5}>
          <View style={myStyles.twoButtonOuter}>
            <View style={myStyles.twoButtonUpper}>
              <Text style={myStyles.twoButtonText}>{this.props.title}</Text>
            </View>
            <View style={myStyles.twoButtonLower}>
              <Text style={myStyles.twoButtonDesc}>{this.props.description}</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
  }
}