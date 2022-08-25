import React, {Component} from "react";


class CounterButton extends Component {

    constructor(){
        super();
        this.state= {
            counter : 0
        }
       this.increment = this.increment.bind(this); //not needed if we use arrow functions
       this.decrement = this.decrement.bind(this);
    }

    render (){
    return (
        <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}> - {this.props.by}</button>
            
        </div>
    );
}
increment (){

    this.setState(
       (prevState)=> {
        return {counter: prevState.counter + this.props.by}
    }
    );

    this.props.incrementMethod(this.props.by);

}

decrement(){
    this.setState (
        (prevState)=>{
            return {counter :prevState.counter - this.props.by}
        }
    );
    this.props.decrementMethod(this.props.by);
}
}
CounterButton.defaultProps = {
    by: 1
}
export default CounterButton