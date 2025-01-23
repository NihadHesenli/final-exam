import { Helmet } from "react-helmet-async"
import styles from './index.module.scss'
import { useContext } from "react"
import { WislistContext } from "../../../context/WishlistContext"
import {Row , Col} from 'antd'
import { FaHeart, FaRegHeart } from "react-icons/fa6"

const Wishlist = () => {
  const {fav,clearFav} = useContext(WislistContext)
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>   
            <div className="container">
           <div className="head">
            <h1>Your Favorites</h1>
            {fav.length > 0 && <button onClick={()=>{clearFav()}} className={styles['clear-all']}>Clear All</button>}
            </div>  
              </div>  
              <div className="container">
              <Row gutter={[16,16]}>
              {fav.map((p)=>{
                 return (
                          <div className="container">
                          <div className={styles['card']}>
                            <Col span={12} key={p._id}>
                            <img width={200} src={p.image} alt="" />
                            <h3>{p.title}</h3>
                            <span>{p.price}$</span>
                            <div className="icons">
                            {fav.find((item)=> item._id === p._id)
                            ?<FaHeart onClick={()=>{favToogle(p)}}/>
                          :<FaRegHeart onClick={()=>{favToogle(p)}}/> }

                            </div>
                          </Col>
                          </div>
                          </div>
                        )
              })}
              </Row>
              </div>
    </>
  )
}

export default Wishlist