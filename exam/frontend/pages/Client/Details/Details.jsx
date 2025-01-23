import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { DB_URl } from "../../../services/base"
import { useEffect, useState } from "react"
import {Row , Col} from 'antd'

const Details = () => {
  const [prod , setProd] = useState([])
  const nav = useNavigate()
  const {id} = useParams()
  const getTheDataById = async ()=>{
    const res = await axios(`${DB_URl}/products/${id}`)
    setProd(res.data)
    
  }
  useEffect(() => {
    getTheDataById()
  }, [])
  
  
  return (
    <>   
    <div className="container">
    <Row gutter={[16,16]}>
      <Col span={12}>
      <img src={prod.image} width={500} alt="" />
      </Col>
      <Col span={6}>
      <h2 style={{fontSize : '40px' , width : '400px',}}>{prod.title}</h2>
      <p style={{marginTop : '20px', fontSize : '25px'}}>{prod.description}</p>
      <p style={{marginTop : '20px' , fontSize : '30px'}}>{prod.price}$</p>
      <button style={{marginTop : '30px',padding : '5px 7px',}} onClick={()=>{nav(-1)}}>Go Back</button>
      </Col>
      </Row>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div> 
    </>
  )
}

export default Details