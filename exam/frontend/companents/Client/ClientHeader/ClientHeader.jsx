import {NavLink} from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { WislistContext } from '../../../context/WishlistContext'

const ClientHeader = () => {
  const {fav} = useContext(WislistContext)
  return (
    <div className="clientheader">
      <div className="clienthead">     
          <img className="client-logo" src='https://preview.colorlib.com/theme/eiser/img/logo.png' alt="logo" />
        <nav>
          <div className="client-ul">
            <li>
              <NavLink className={'client-a'} to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className={'client-a'} to={'/products'}>Products</NavLink>
            </li>
            <li>
              <NavLink className={'client-a'} to={'/wishlist'}>Wishlist <span className='client-fav'>{fav.length}</span></NavLink>
            </li>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ClientHeader