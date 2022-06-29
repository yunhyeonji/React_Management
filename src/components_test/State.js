import React,{ Component } from 'react';

class State extends Component{
    render(){
      return(
        <article>
            <h2>State</h2>
            <ol>
                <li>
                컴포넌트의 상태를 나타내며 Props와 반대로 변할 수 있다. 즉 동적인 데이터를 다룰때 사용한다.    (리스트에서 선택된 값, 체크박스에서 체크된 값 등)
                </li>
                <li>
                위에서 말한것과 같이 state는 클래스형 컴포넌트에서만 사용할 수 있다.
                </li>
                <li>
                각각의 state는 독립적이기 때문에 다른 컴포넌트의 직접적인 접근이 불가능 하지만,     상위 state는 state를 변경해주는 함수를 props로 받을 경우 state의 변경이 가능하다.
                </li>
            </ol>
        </article>
      );
    }
}

export default State; //TOC를 외부에서 사용하겠다!

