import React,{ Component } from 'react';

class UpdateContents extends Component{
    constructor(props){
        super(props);
        this.state = {
            id :this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
        //복잡한 코드를 함수로 만들어서 사용한다.
       /* onChange = {
            세줄의 코드 대신 사용할 수 있음
            function(e){
            this.setState({title:e.target.value})
            }.bind(this)
        }*/
        this.setState({[e.target.name] : e.target.value});
    }

    render(){
      console.log('UpdateContent render');
      return(
        <article>
            <h2>Update</h2>
            <form 
                action = '/create_process' 
                method = 'post' 
                onSubmit = {
                    function(e){
                    e.preventDefault();
                    // this.props.onSubmit(e.target.title.value,e.target.desc.value);
                    this.props.onSubmit(this.state.id,this.state.title,this.state.desc);
                    }.bind(this)
                }>
                <input type="hidden" name='id' value={this.state.id}></input>
                <p><input 
                    type='text' 
                    name='title' 
                    placeholder='title' 
                    value={this.state.title}
                    onChange = {
                        // function(e){
                        // this.setState({title:e.target.value})
                        // }.bind(this)
                        this.inputFormHandler
                }
                ></input></p>
                <p><textarea 
                    name='desc' 
                    placeholder='description' 
                    value={this.state.desc}
                    onChange = {
                        // function(e){
                        // this.setState({desc:e.target.value})
                        // }.bind(this)
                        this.inputFormHandler
                }
                ></textarea></p>
                <p><input type='submit'></input></p>
            </form>
        </article>
      );
    }
}

export default UpdateContents;