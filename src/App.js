import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Clock from './Clock';
import dbCharacters from './db';

function Welcome(props){
  return <h1>Welcome {props.name}</h1>
}

class App extends Component {
    state = {
        characters: dbCharacters
    }

    removeCharacter = (index) => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          })
        })
      }

    addCharacter = (character)=>{
      this.setState({characters:[...this.state.characters, character]})
    }

    render() {
    const { characters } = this.state
      return (
        <div className="container">
            <Welcome name="Trey"/>
            <Clock />
            <Table characterData={characters} 
            removeCharacter={this.removeCharacter} 
            />
            <br/>
            <h4>Add Character</h4>
            <Form addCharacter={this.addCharacter}/>
        </div>
      )
    }
  }

export default App