import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import myStyles, {colors} from '../../Styles';

export default class Answer extends Component {
  constructor(props) {
    super(props);
  }

  _onPress() {
    this.props.onRowPress(this.props.id);
  }

  render () {
    console.log("Rendering button");
    console.log(this.props);
    return (
        <TouchableHighlight
          onPress={() => {this._onPress()}}
          activeOpacity={1}
          underlayColor={colors.lightgrey}
        >
          <View style={myStyles.listitem}>
            <Text style={this.props.isPressed ? myStyles.buttontextPress : myStyles.buttontext}>{this.props.title}
            </Text>
          </View>
        </TouchableHighlight>

    )
  }
}