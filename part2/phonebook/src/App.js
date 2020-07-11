import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const all_names = persons.map(person => person.name)

    if (all_names.includes(newName)) {
    window.alert(`${newName} is already added to the phonebook.`)
  } else {
    console.log(`added ${newName}`)
    const personObject = {
      name : newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleContactChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => <li key={person.name}> {person.name} </li>)}
      </ul>
      <h2> test login </h2>



    </div>
  )
}

export default App
