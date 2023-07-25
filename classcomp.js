import React,{Component} from 'react';
class CounterComponent extends Component{

    state ={
        number:0
    }
     incrementH = () =>{
        this.setState(preState =>{
            return {number :preState.number+1}
        })
    }
    decrementH = ()=>
    {
        this.setState(preState=>{
            return{number:preState.number-1}
        })
    }
    
    render(){
const {number} = this.state;
        return(
            <center>
                <h1>{number}</h1>
                <button onClick={this.incrementH}>Increment</button> <br></br><br></br>
                <button onClick={this.decrementH}>Decrement</button>
            </center>
        )
    }
}
export default CounterComponent;