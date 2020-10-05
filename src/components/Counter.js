import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        })
        console.log(this.state.count)
    }
    decrement(){
        this.setState({
            count: this.state.count-1
        })
        console.log(this.state.count)
    }
    incrementUsingPrev(){
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }
    render() {
        return (
            <div>
               <h1>Count- {this.state.count} </h1>
               <button onClick= {()=>this.incrementUsingPrev()}>Increment</button>
               <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
