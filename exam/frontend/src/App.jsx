
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from '../layout/Client/ClientLayout'
import Home from '../pages/Client/Home/Home'
import AllProducts from '../pages/Client/Products/AllProducts'
import Details from '../pages/Client/Details/Details'
import Wishlist from '../pages/Client/Wishlist/Wishlist'
import AdminLayout from '../layout/Admin/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import AdminTable from '../pages/Admin/AdminTable/AdminTable'
import AddProduct from '../pages/Admin/AddProd/AddProduct'
import NotFound from '../companents/NotFound/NotFound'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<ClientLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='products'>
          <Route index element={<AllProducts/>}/>
          <Route path=':id' element={<Details/>}/>
        </Route>
        <Route path='wishlist' element={<Wishlist/>}/>
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/admin/admin-table' element={<AdminTable/>}/>
        <Route path='/admin/add-product' element={<AddProduct/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
