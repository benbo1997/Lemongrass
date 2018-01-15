import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <TouchableWithoutFeedback
              onPress={this.props.onPress}>
            <View>
              <Icon name={'chevron-left'} size={20} style={{marginLeft: 10, color: '#fff'}}/>
            </View>
          </TouchableWithoutFeedback>
    )
  }
}