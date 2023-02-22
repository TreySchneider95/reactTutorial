import React, {Component} from 'react';


class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  render(){
    return (
      <div>
        <p>it is {this.state.toLocalTimeString()}</p>
      </div>
    )
  }

}

export default Clock