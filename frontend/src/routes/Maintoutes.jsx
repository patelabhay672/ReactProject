import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home"
import Products from "../pages/Products"
const Maintoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Products/>}/>
  </Routes>
}

export default Maintoutes
