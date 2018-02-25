import React, { Component } from 'react';
import { Platform, Text, View, SectionList, Alert, TouchableHighlight, ActivityIndicator} from 'react-native';
import myStyles, {colors} from '../Styles';
import AnimatedButton from 'react-native-micro-animated-button';

export default class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  reset() {
    this.b1.reset();
    this.props.onPress();
  }

  render() {
    return (
      <View style={myStyles.submitButton}>
        <AnimatedButton
          foregroundColor={colors.lemongreen}
          label={"Submit"}
          onPress={ () => {this.b1.success()} }
          onSuccess={ () => {this.reset();}}
          ref={ref => (this.b1 = ref) }
          renderIndicator={<ActivityIndicator color={colors.lemongreen}/>}
          successIconName={"check"}
        />
      </View>
    );
  }
}