import React,{ Component } from 'react';

class TOC extends Component{
    render(){
      let lists = [];
      let data = this.props.data;

      let i = 0;
      while(i<data.length){
        lists.push(<li><a href={'/content/' + data[i].id}>{data[i].title}</a></li>);
        i = i+1;
      }
      return(
        // <nav>
        // <ul>
        //     <li><a href="1.html">HTML</a></li>
        //     <li><a href="2.html">CSS</a></li>
        //     <li><a href="3.html">JavaScript</a></li>
        // </ul>
        // </nav>

        <nav>
        <ul>
            {lists}
        </ul>
        </nav>
      );
    }
}

export default TOC; //TOC를 외부에서 사용하겠다!