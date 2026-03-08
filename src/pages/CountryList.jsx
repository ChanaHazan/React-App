import React from 'react'
import countries from '../data/data'
import { Link } from 'react-router'

const CountryList = () => {
    return (
        <>
            <h2>Hello Country list</h2>
            {countries.map(c => (
                <div key={c.id}>
                    <Link to={`/country/${c.id}`}>{c.name}{<br/>}{<img src={c.img}/>}{<hr/>}</Link>
                </div>
            ))}
        </>
    )
}

export default CountryList