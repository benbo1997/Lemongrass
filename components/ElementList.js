import React, { Component } from 'react';
import { Text, Button, View, FlatList, Alert, TouchableHighlight, Dimensions} from 'react-native';
import myStyles, {colors} from '../Styles';
import { Icon } from 'react-native-elements';
const {width, height} = Dimensions.get('window');

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
        <TouchableHighlight 
        onPress={() => {this._onPress()}}
        activeOpacity={1}
        underlayColor={colors.lightgrey}>
          <View style={{
            backgroundColor: this.props.color,
            margin: 3,
            padding: 40,
            width: width - 10,
            shadowOffset:{width: 0, height:1},
            shadowColor:'#000',
            shadowRadius: 1,
            shadowOpacity:.1,
            elevation: 1,
          }}>
            <Icon 
              name={this.props.name}
              type={this.props.type}
              color='#fff' />
            <Text style={myStyles.subtitle2}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

export class ElementList extends Component {
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
            title: 'Fire',
            color: '#ff9500',
            name: 'fire',
            type: 'material-community',
          },
          {
            key: '124',
            title: 'Air',
            color: '#ffcc00',
            name: 'air',
            type: 'entypo',
          },
          {
            key: '125',
            title: 'Earth',
            color: '#9FE53B',
            name: 'filter-hdr',
          },
          {
            key: '126',
            title: 'Water',
            color: '#5ac8fa',
            name: 'ios-water',
            type: 'ionicon',
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
                  renderItem={({item}) => <ListItem name={item.name}
                                                    type={item.type}
                                                    title={item.title}
                                                    color={item.color}
                                                    onRowPress={this.props.onRowPress}/>}
        />
    );
  }
}

