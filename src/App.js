import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id: uuid()
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capiitalize text-center">todo input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
