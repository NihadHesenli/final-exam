import {useEffect, useState} from 'react'
import styles from './index.module.scss'
import axios  from 'axios'
import { Col, Row } from 'antd'
import { DB_URl } from '../../../../services/base'
const HomeProducts = () => {
  const [prod,setProd] = useState([])

  const getProd = async ()=>{
    try {
      const products = await axios(`${DB_URl}/products`)
      setProd(products.data)    
        
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProd()   
  }, [])

  return (
    <>
    <Row gutter={[16,16]}>
      {prod.length > 0 && prod.slice(0,3).map((p)=>{
        return (
          <div className="container">
          <div className={styles['card']}>
            <Col span={12} key={p._id}>
            <img width={200} src={p.image} alt="" />
            <h3>{p.title}</h3>
            <span className={styles['span']}>{p.price}$</span>
          </Col>
          </div>
          </div>
        )
      })}
    </Row>
    </>
  )
}

export default HomeProducts