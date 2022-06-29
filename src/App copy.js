// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';     // 함수로 만들때 필요한 import구문
import React,{ Component } from 'react';  //클래스로 만들때 필요한 import구문
import Props from './components_test/Props';
import Contents from './components_test/Contents';
import Header from './components_test/Header';
import State from './components_test/State';


class App extends Component{
  render(){
    return(
      <div>
        {/* <Subject title='WEB' sub='world wide web!'></Subject> */}
        <Header></Header> {/* == <Subject/>*/}
        <Contents/>
        <Props></Props>
        <State></State>
      </div>
    );
  }
}
export default App; //index.js에서 사용하기 위해서 
