import React, { useState } from 'react'
import AddContact from './components/AddContact'
import ContactInfo from './components/ContactInfo'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setNewSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name : newName,
      number: newNumber
    }

    const all_names = persons.map(person => person.name)

    if (all_names.includes(newName)) {
    window.alert(`${newName} is already added to the phonebook.`)
    } else {
    console.log(`added ${newName}`)

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const personsToShow = searchName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()) )

  return (
    <div>
      <h1>Phonebook</h1>
      <h2> Search contact </h2>
      
      <Filter 
        value={searchName}
        onChange={handleSearchChange}
      />

      <h2> Add New Contact </h2>

      <AddContact 
        onSubmit={addPerson}
        name={{value: newName, onChange: handleContactChange}}
        number={{value: newNumber, onChange: handleNumberChange}}
      />

      <h2>Numbers</h2>

      <ContactInfo
        persons={personsToShow}
      />

    </div>
  )
}

export default App
