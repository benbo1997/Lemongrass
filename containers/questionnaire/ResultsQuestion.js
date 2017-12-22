import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import myStyles from '../../Styles';

export default class ResultsQuestion extends Component {
  static navigationOptions = {
    title: 'ResultsQ',
    header: null
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {navigate} = this.props.navigation;
    let params = this.props.navigation.state.params;
    console.log(this.props.navigation.state.params);
    return (
        <View style={myStyles.container}>
          <Text style={myStyles.subtitle}>You have selected:</Text>
          <Text style={myStyles.plaintext}>Purpose: {params.purpose}</Text>
          <Text style={myStyles.plaintext}>Risk: {params.risk}</Text>
          <Text style={myStyles.plaintext}>Timeframe(days): {params.timeframe}</Text>
          <Button title="View Options"
                  onPress={() => {
                    navigate("Funds");
                  }}/>
        </View>
    );
  }
}