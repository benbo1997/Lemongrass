import React, { Component } from 'react';
import { Text, Button, View, SectionList, Alert, TouchableHighlight} from 'react-native';
import myStyles, {colors} from '../Styles';

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
          <View style={myStyles.learnitem}>
            <Text style={myStyles.learnitemtext}>{this.props.title}</Text>
            <Text style={myStyles.learnitemplaintext}>{this.props.description}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

class ListHeader extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <View style={myStyles.learnsection}>
        <Text style={myStyles.learnsectiontitle}>{this.props.title}</Text>
        </View>
    );
  }
}

export class LearnList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading:false,
      sections: [
        {
          title: 'Beginner',
          data: [
            {
              key: '1',
              title: 'What is Lemongrass',
              description: 'Introduction to the Lemongrass app'
            },
            {
              key: '2',
              title: 'Investment 101',
              description: 'Basic investing concepts'
            },
            {
              key: '3',
              title: 'Risk',
              description: 'How does risk affect investment'
            },
            {
              key: '4',
              title: 'Reading Graphs',
              description: 'What do graph mean'
            },
          ]},
        {
          title: 'Intermediate',
          data: [
            {
              key: '21',
              title: 'Investment 102',
              description: 'Basic investing concepts'
            },
            {
              key: '31',
              title: 'Risk',
              description: 'How does risk affect investment'
            },
            {
              key: '41',
              title: 'Reading Graphs',
              description: 'What do graph mean'
            },
          ]},
        {
          title: 'Advanced',
          data: [
            {
              key: '22',
              title: 'Investment 103',
              description: 'Basic investing concepts'
            },
            {
              key: '32',
              title: 'Risk',
              description: 'How does risk affect investment'
            },
            {
              key: '42',
              title: 'Reading Graphs',
              description: 'What do graph mean'
            },
          ]}
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
        <SectionList style={myStyles.optionlist}
                  sections={this.state.sections}
                  renderItem={({item}) => <ListItem title={item.title}
                                                    description={item.description}
                                                    onRowPress={this.props.onRowPress}/>}
                  renderSectionHeader={({section}) => <ListHeader title={section.title}/>}
        />
    );
  }
}
