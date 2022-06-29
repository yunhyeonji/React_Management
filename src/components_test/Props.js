import React,{ Component } from 'react';

class Props extends Component{
    render(){
      return(
        <article>
            <h2>Props</h2>
            <ol>
                <li>
                프로퍼티(properties)의 줄임말이다.
                </li>
                <li>
                부모요소에서 설정한다. 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터를 Props라고 한다.
                </li>
                <li>
                읽기 전용이다. 자식 컴포넌트에서 전달 받은 props를 변경이 불가능, props를 전달해준 최상위 부모 컴포넌트만 props를 변경할 수 있다.
                </li>
            </ol>
        </article>
      );
    }
}

export default Props; //TOC를 외부에서 사용하겠다!