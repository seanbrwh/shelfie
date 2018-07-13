import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './component/DashBoard/DashBoard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state ={
      inv_list: [{name:'123',price:12,image:'123'},{name:'abc',price:99,image:'dfg'},{name:'lkj',price:56,image:'lkl'},{name:'jkj',price:55,image:'asd'},]
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <DashBoard invList={this.state.inv_list}/>
        <Form/>
      </div>
    );
  }
}

export default App;
