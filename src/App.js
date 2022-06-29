// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';     // 함수로 만들때 필요한 import구문
import React,{ Component } from 'react';  //클래스로 만들때 필요한 import구문
import TOC from './components/TOC';
import Contents from './components/Contents';
import Subject from './components/Subject';

  //함수로 만들기
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  //클래스로 만들기
// class App extends Component{
//   render(){
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>


//       <div>
//         기본형식 {/* 하나의 태그 안에 넣어놔야 함!!! */}
//         hello world
//       </div>
//     );
//   };
// }
      // Subject.js파일을 따로 만들어서 사용하겠습니다.
// class Subject extends Component{
//   render(){
//     return(
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//     </header>
//     );
//   }
// }

      // TOC.js파일을 따로 만들어서 사용하겠습니다.
// class TOC extends Component{
//   render(){
//     return(
//       <nav>
//       <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JavaScript</a></li>
//       </ul>
//       </nav>
//     );
//   }
// }
      // Contents.js파일을 따로 만들어서 사용하겠습니다.
// class Contents extends Component{
//   render(){
//     return(
//       <article>
//       {/* <h2>HTML</h2>
//       HTML is HyperText Markup Language. */}
//       <h2>{this.props.title}</h2>
//       {this.props.desc}
//       </article>
//     );
//   }
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      // key : value 값으로 
      subject:{title:'WEB',sub:'World wide Web'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return(
      <div>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> {/* == <Subject/>*/}
        <Subject title="연습용" sub="함수의 재사용이 가능하다"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Contents title="HTML" desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}
export default App; //index.js에서 사용하기 위해서 
