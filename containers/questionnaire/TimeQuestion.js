import React, { Component } from 'react';
import { Button, Text, View, Slider } from 'react-native';
import myStyles from '../../Styles';

export default class TimeQuestion extends Component {
  static navigationOptions = {
    title: 'TimeQ',
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {days:45}
  }

  _getUpdatedOptions (days) {
    options = {
      purpose: this.props.navigation.state.params.purpose,
      risk: this.props.navigation.state.params.risk,
      timeframe: days
    }
    return options;
  }

  render() {
    let {navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params);
    return (
        <View style={myStyles.container}>
          <Slider
            minimumValue={30}
            step={1}
            maximumValue={180}
            value={this.state.days}
            onValueChange={(val) => (this.setState({days:val}))}
            />
          <Text style={myStyles.plaintext}>{this.state.days}</Text>
          <Button style={myStyles.confirm} title="Confirm"
            onPress={() => {
              navigate("ResultsQ", this._getUpdatedOptions(this.state.days));
            }}/>
        </View>
    );
  }
}