import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

// actions
import {removeItem} from './../../Redux/actions/todoActions';

class ListPage extends Component {
  renderItem = ({item}) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          flexDirection: 'row',
        }}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
          <Text>{item.date}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.removeItem(1);
          }}>
          <Text>Sil</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.todo.list,
  };
};


export default connect(mapStateToProps, {removeItem })(ListPage);
