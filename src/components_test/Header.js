import React,{ Component } from 'react';

class Header extends Component{
    render(){
      return(
        <header>
            <h1>react연습화면</h1>
            <nav>
                <ul>
                    <li><a href="1.html">react란?</a></li>
                    <li><a href="2.html">Props</a></li>
                    <li><a href="3.html">State</a></li>
                </ul>
            </nav>
        </header>

      );
    }
}

export default Header;