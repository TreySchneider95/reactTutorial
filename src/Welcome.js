import React, {Component} from 'react';


class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {time: new Date()}
  }

  tick(){
    this.setState({
      time: new Date()
    })
  }

  componentDidMount(){
    this.timerId = setInterval(
      ()=>this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render()
  {
    return (
      <div>
        <p>it is {this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }

}

function Greeting(props){
  return <h1>Welcome {props.name}</h1>
}

class Welcome extends Component {
  render(){
    return (
      <div>
        <Greeting name="Trey"/>
        <Clock />
      </div>
    )
  }
}

export default Welcome