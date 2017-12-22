import React, { Component } from 'react';
import { Text, Button, View, FlatList, Alert, TouchableHighlight} from 'react-native';
import myStyles from '../Styles';

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
        <TouchableHighlight onPress={() => {this._onPress()}}>
          <View style={myStyles.listitem}>
            <Text style={myStyles.subtitle}>{this.props.title}</Text>
            <Text style={myStyles.plaintext}>{this.props.description}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

export class NewsFeed extends Component {
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
            key: '123',
            title: 'GreenEnergyCorp',
            description: 'description',
          },
          {
            key: '124',
            title: 'Envirofriends',
            description: 'description',
          },
          {
            key: '125',
            title: 'Feed co.',
            description: 'description',
          },
          {
            key: '126',
            title: 'HappyFarm',
            description: 'description',
          },
        ]
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

