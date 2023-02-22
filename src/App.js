import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {
    state = {
        characters:[
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
            {
              name: 'Link',
              job: 'Accountant',
            },
          ]
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