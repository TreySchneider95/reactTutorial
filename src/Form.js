import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props)

        this.initialState = {
            name: '',
            job: ''
        }
        this.state = this.initialState
    }


    
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.addCharacter(this.state)
        this.setState(this.initialState)
    }

    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {name, job} = this.state
        return(
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name:</label><br/>
                <input 
                    required
                    type="text" 
                    id='name' 
                    name='name' 
                    value={name} 
                    onChange={this.handleChange}
                ></input><br/>
                <label htmlFor="job">Job:</label><br/>
                <input 
                    required 
                    type="text" 
                    id='job' 
                    name='job' 
                    value={job} 
                    onChange={this.handleChange}
                ></input><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form