import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import CountryDetails from '../pages/CountryDetails'
import CountryList from '../pages/CountryList'

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path="countrypage" element={<CountryList />} />
                <Route path="country/:countryId" element={<CountryDetails />} />
                <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter