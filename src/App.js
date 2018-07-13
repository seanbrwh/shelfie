import React, { Component } from 'react';
import './App.css';
import DashBoard from './component/DashBoard/DashBoard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inv_list: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:3010/api/inventory').then(res=>{
        this.setState({
        inv_list: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <DashBoard invList={this.state.inv_list}/>
        <Form cDM={this.componentDidMount}/>
      </div>
    );
  }
}

export default App;
