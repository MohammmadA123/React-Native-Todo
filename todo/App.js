//Importing
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

//Body Code
class App extends React.Component {
  state = {
    text: '',
    todo: [],
  };

  addTodo = () => {
    var newTodo = this.state.text;
    var array = this.state.todo;
    array.push(newTodo);
    this.setState({ todo: array, text: '' });
  };

  deleteTodo = t => {
    var array = this.state.todo;
    var pos = array.indexOf(t);
    array.splice(pos, 1);
    this.setState({ todo: array });
  };

  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
        <Text
          style={{ marginTop: 10, fontSize: 22, color:'white'}}
          onPress={() => {
            this.deleteTodo(t);
          }}>
          {t}
        </Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00B0FF' }}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Todo List App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            title="Add Item To Todo List"
            color="#E0F7FA"
            onPress={this.addTodo}
          />
          <View style={{marginTop:50}}>
          {this.renderTodos()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textStyle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
};

//Exporting
export default App;