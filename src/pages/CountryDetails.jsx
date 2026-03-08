import React from 'react'
import { useParams, Link } from "react-router-dom"
import countries from "../data/data"

const CountryDetails = () => {

  const { countryId } = useParams()

  const country = countries.find(c => c.id === countryId)

  if(!country){
    return <h2>Country not found</h2>
  }

  return (
    <>
      <h1>{country.name}</h1>

      <img src={country.img}/>

      <p><b>Language:</b> {country.language}</p>
      <p><b>Population:</b> {country.population}</p>

      <br/>

      <Link to="/countrypage">Back to countries</Link>
    </>
  )
}

export default CountryDetails


