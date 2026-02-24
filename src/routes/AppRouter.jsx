import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import Form from '../pages/users/Form'
import UserDetails from '../pages/users/UserDetails'
import UserList from '../pages/users/UserList'
import UserLayout from '../components/UserLayout'

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='users' element={<UserLayout/>}>
                <Route index element={<UserList />} />
                <Route path='insert' element={<Form />} />
                <Route path=':userName' element={<UserDetails/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter