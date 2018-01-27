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
        <TouchableHighlight onPress={() => {this._onPress()}}>
          <View style={myStyles.listitem}>
            <Text style={myStyles.buttontext}>{this.props.title}</Text>
            { this.props.isPressed ?
                <Icon name={'check'} size={20} style={{
                  position: 'absolute',
                  marginLeft: 10,
                  marginTop: 10,
                  color: '#fff'
                }}/> : null
            }
          </View>
        </TouchableHighlight>
    )
  }
}