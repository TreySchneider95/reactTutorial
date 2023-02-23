import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Welcome from './Welcome';
import dbCharacters from './db';


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

    deleteAll = ()=>{
      this.setState({
        characters: []
      })
    }

    render() {
    const { characters } = this.state
      return (
        <div className="container">
            <Welcome />
            <Table characterData={characters} 
            removeCharacter={this.removeCharacter}
            deleteAll={this.deleteAll}
            />
            <br/>
            <h4>Add Character</h4>
            <Form addCharacter={this.addCharacter}/>
        </div>
      )
    }
  }

export default App