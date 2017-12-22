import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import myStyles, {colors} from '../Styles';

export default class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {navigate} = this.props.navigation;
    return (
        <View style={myStyles.homecontainer}>
          <View style={myStyles.buttoncontainer}>
            <Button
                onPress={() =>
                  navigate('Learn')
                }
                title="Learn"
            />
            <Button
                onPress={() =>
                  navigate('PurposeQ')
                }
                title="Invest"
            />
          </View>
        </View>
    );
  }
}