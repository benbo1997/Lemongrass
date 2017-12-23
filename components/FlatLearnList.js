import React, { Component } from 'react';
import { Text, Button, View, FlatList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../Styles';
import TwoColourButton from "./TwoColourButton";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  _onPress() {
    const params = {
      title: this.props.title,
    };
    this.props.onRowPress(params);
  }

  render () {
    return (
        <TwoColourButton
          title={this.props.title}
          description={this.props.description}
          onPress={() => {this._onPress()}}/>
    )
  }
}

export class FlatLearnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading:false,
      dataSource: [
        {
          key: '1',
          title: 'WHAT IS LEMONGRASS',
          description: 'INTRODUCTION TO THE LEMONGRASS APP'
        },
        {
          key: '2',
          title: 'INVESTMENT 101',
          description: 'BASIC INVESTING CONCEPTS'
        },
        {
          key: '3',
          title: 'RISK',
          description: 'HOW DOES RISK AFFECT INVESTMENT'
        },
        {
          key: '4',
          title: 'READING GRAPHS',
          description: 'WHAT DO GRAPH MEAN'
        },
        {
          key: '21',
          title: 'INVESTMENT 102',
          description: 'BASIC INVESTING CONCEPTS'
        },
        {
          key: '31',
          title: 'RISK',
          description: 'How does risk affect investment'
        },
        {
          key: '41',
          title: 'READING GRAPHS',
          description: 'What do graph mean'
        },
        {
          key: '22',
          title: 'INVESTMENT 103',
          description: 'Basic investing concepts'
        },
        {
          key: '32',
          title: 'RISK',
          description: 'How does risk affect investment'
        },
        {
          key: '42',
          title: 'READING GRAPHS',
          description: 'What do graph mean'
        },
      ],
    })
  }

  render () {
    if (this.state.isLoading) {
      return (
          <Text style={myStyles.plaintext}>NewsFeed wooooo!></Text>
      );
    }

    return (
        <FlatList style={myStyles.optionlist}
                  data={this.state.dataSource}
                  renderItem={({item}) => <ListItem title={item.title}
                                                    description={item.description}
                                                    onRowPress={this.props.onRowPress}/>}
        />
    );
  }
}