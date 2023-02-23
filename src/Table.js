import React, {Component} from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

const DeleteAll = (props)=>{
  return (
    <button onClick={()=>props.deleteAll()}>DeleteAll</button>
  )
}

class Table extends Component {
    render()
    {
    const { 
      characterData, 
      removeCharacter,
      deleteAll
    } = this.props
      return (
        <div>
          <table>
            <TableHeader />
            <TableBody characterData={characterData} 
            removeCharacter={removeCharacter} 
            />
          </table>
          <DeleteAll deleteAll={deleteAll}/>
        </div>
      )
    }
  }

export default Table