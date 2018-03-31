import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
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
          <Image
              top={20}
              style={{position:'absolute', width:360, height:300}}
              source={require('../resources/images/forest.jpeg')}
          />
          <Image
              top={125}
              style={{width:360, height:100}}
              source={require('../resources/images/design1.jpg')}
          />
          <View top={280} style={myStyles.buttoncontainer}>
            <Button
                onPress={() =>
                  navigate('Learn')
                }
                title="study"
            />
            <Button
                onPress={() =>
                    navigate('QuizList')
                }
                title="train"
            />
            <Button
                onPress={() =>
                  navigate('Impacts')
                }
                title="impact"
            />
          </View>
        </View>
    );
  }
}