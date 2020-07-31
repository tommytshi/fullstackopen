import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const CountryDetails = ({country}) => {
  return(
    <div>
      <h2> {country.name} </h2>
      <p> Capital: {country.capital} </p>
      <p> Population: {country.population} </p> 
      <h3> Languages </h3>
      <ul>
      {country.languages.map(language => {
        return <li key={language.iso6391}> {language.name} </li> 
      })}
      </ul>
      <img 
        src = {country.flag}
        alt = {country.name} Flag />
    </div>
  )
}

const CountryItem = ({country}) => {
  return (
    <div>
      <p> {country.name} </p>
    </div>
  )
}

const CountryList = ({countries}) => {
  if (countries.length > 10) {
    return(
    <p> Too many matches, specify another filter </p>
    )
  }

  if (countries.length === 1) {
    return( <CountryDetails country = {countries[0]} />)
}

  return countries.map(country => {
       return <CountryItem key={country.name} country={country}/> 
    })
}

const Filter = ({onChange}) => {
  return (
    <div>
    find countries <input onChange={onChange} />
    </div>
  )
}


const App = () => {

  const [allCountries, setAllCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const countriesToShow = (() => {

    if (searchTerm.length === 0) {
      return []
    }

    return allCountries.filter(country => {
        return country.name.toLowerCase().includes(searchTerm)
      })
  })()


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllCountries(response.data)
      })
    }

  useEffect(hook, [])

  const handleFilterChange = ({target}) => {
    const searchTerm = target.value.trim().toLowerCase()
    setSearchTerm(searchTerm)
  }

  return (
    <div>  
    <h1> Country Data </h1>
    <Filter onChange={handleFilterChange} />

    <CountryList countries={countriesToShow} />
    </div>
  )

}



export default App;
