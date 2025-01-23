import { Helmet } from "react-helmet-async"
import {useContext, useEffect, useState} from 'react'
import styles from './index.module.scss'
import axios  from 'axios'
import { Col, Row } from 'antd'
import { DB_URl } from '../../../services/base'
import { WislistContext } from "../../../context/WishlistContext"
import { FaHeart ,FaRegHeart } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

const AllProducts = () => {
  const [prod,setProd] = useState([])
  const [search,setSearch] = useState('')
  const [sort,setSort] = useState('')
  const nav = useNavigate()
  const {fav,favToogle,clearFav} = useContext(WislistContext)
  console.log(search);
  

  const getProd = async ()=>{
    try {
      const products = await axios(`${DB_URl}/products`)
      setProd(products.data)    
        
    } catch (error) {
      console.log(error);
    }
  }
  console.log(fav);
  

  useEffect(() => {
    getProd()   
  }, [])
  const filteredProd = prod.filter((p)=>{
    return p.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
  })

  const sortedProd = filteredProd .toSorted((a,b)=>{
    switch (sort) {
      case "asc":
        return a.price - b.price 
    case "desc":
      return b.price - a.price 
      default:
        break;
    }
  })

  const detailnavigate = (prodId)=>{
    nav(`${prodId}`)
  }
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
              <div className={styles['inputs']}>
                <input type="text" name="search" onChange={(e)=>{setSearch(e.target.value)}}/>
              <select name="" id="" onChange={(e)=>{setSort(e.target.value)}}>
                <option value="default">Default</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
              </select>
              </div>
            </div>
            <div className="container">
            <Row className={styles['row']} gutter={[16,16]}>
      {sortedProd.length > 0 && sortedProd.map((p)=>{
        return (
            <Col className={styles['col']} span={6} >
            <img width={200} src={p.image} alt="" />
            <div className={styles['info']}>
            <div className={styles['icons']}>
            {fav.find((item)=> item._id === p._id)
            ?<FaHeart onClick={()=>{favToogle(p)}}/>
          :<FaRegHeart onClick={()=>{favToogle(p)}}/> }
          <FaInfoCircle onClick={()=>{detailnavigate(p._id)}} style={{marginLeft: '10px'}}/>

            </div>
            <h3>{p.title}</h3>
            <span>{p.price}$</span>
            </div>
          </Col>
        )
      })}
    </Row>
            </div>
    </>
  )
}

export default AllProducts