
import React from 'react'
import Home from '../AllContent/Home'
import Business from '../AllContent/Business'
import Crypto_Corner from '../AllContent/Crypto_Corner'
import Entertainment from '../AllContent/Entertainment'
import Hindi from '../AllContent/Hindi'
import Magzine from '../AllContent/Magzine'
import Money from '../AllContent/Money'
import Others from '../AllContent/Others'
import Outlook from '../AllContent/Outlook'
import Photo from '../AllContent/Photo'
import Poshan from '../AllContent/Poshan'
import Sports from '../AllContent/Sports'
import Travel from "../AllContent/Travel"
import Video from "../AllContent/Video"
import FullNews from '../singlepage/FullNews'
import Login from '../login/Login'
import {Route, Routes} from 'react-router-dom'

const AllRoutes = () => {
  return (
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/business" element={<Business/>}/>
  <Route path="/crypto" element={<Crypto_Corner/>}/>
  <Route path="/entertainment" element={<Entertainment/>}/>
  <Route path="/hindi" element={<Hindi/>}/>
  <Route path="/magzine" element={<Magzine/>}/>
  <Route path="/money" element={<Money/>}/>
  <Route path="/others" element={<Others/>}/>
  <Route path="/outlook" element={<Outlook/>}/>
  <Route path="/photos" element={<Photo/>}/>
  <Route path="/poshan" element={<Poshan/>}/>
  <Route path="/sports" element={<Sports/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/videos" element={<Video/>}/>
  <Route  path="/fullnews/:title/:source/:description" element={<FullNews/>}/>
  {/* <Route  path="/fullnews/:title" element={<FullNews/>}/> */}
  <Route path='/login' element={<Login/>}/>

 </Routes>
  )
}

export default AllRoutes