// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';     // 함수로 만들때 필요한 import구문
import React,{ Component } from 'react';  //클래스로 만들때 필요한 import구문
import TOC from './components/TOC';
import ReadContents from './components/ReadContents';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContents from './components/CreateContents';
import UpdateContents from './components/UpdateContents';

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
    this.max_content_id = 3;
    this.state = {
      // key : value 값 형태로 사용
      mode:'read',
      selected_contents_id:0,
      subject:{title:'WEB',sub:'World wide Web'},
      welcome:{title:'Welcome',desc:'Hello,React!!!'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  //화면 출력하는 부분
  render(){
    console.log('App render');
    let _title,_desc = null, _article;

    //모드가 무엇인가에 따라서 contents부분에 출력되는 것을 다르게 하라
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContents title={_title} desc={_desc}/> ;
    }else if(this.state.mode === 'read'){
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;

      let i = 0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContents title={_title} desc={_desc}/> ;
    }else if(this.state.mode === 'create'){
      _article = <CreateContents onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;

        // this.state.contents.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // );

        let _contents = this.state.contents.concat(
          {id:this.max_content_id,title:_title,desc:_desc}
        );

        this.setState({
          // contents : this.state.contents
          contents : _contents
        })

      }.bind(this)}></CreateContents>
    }

    return(
      <div>
        <Subject title="연습용" sub="함수의 재사용이 가능하다"></Subject>
        
        {/* header와 같은 코드
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> == <Subject/> */}
        
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}
        >
        </Subject>

        {/* <header>
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.setState({mode:'welcome'});
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub};
        </header> */}

        <TOC data={this.state.contents}
        onChangePage={function(id){
          this.setState(
            {mode:'read',selected_contents_id:Number(id)}
          )}.bind(this)}
        ></TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}>
        </Control>

        {/* 변수에 따라 _article이 달라짐 */}
        {_article}

      </div>
    );
  }
}
export default App; //index.js에서 사용하기 위해서 
