import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Start from './components/Start'
import Service from './components/Service'
import Service_Detail from './components/Service_Detail'
import Transport from './components/Transport'
import Transport_Detail from './components/Transport_Detail'
import Transport_Regional from './components/Transport_Regional'
import Blog from './components/Blog'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/start' element={<Start></Start>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/serviceDetail' element={<Service_Detail></Service_Detail>}></Route>
        <Route path='/transport' element={<Transport></Transport>}></Route>
        <Route path='/transportDetail' element={<Transport_Detail></Transport_Detail>}></Route>
        <Route path='/transportRegional' element={<Transport_Regional></Transport_Regional>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}
