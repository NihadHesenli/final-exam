import axios from 'axios'
import { DB_URl } from '../../../services/base';
import {useEffect, useState} from 'react'
import {Table} from 'antd'

const AdminTable = () => {

  const [prod,setProd] = useState()



  const getProd = async ()=>{
    try {
      const products = await axios(`${DB_URl}/products`)
      setProd(products.data)
      console.log(products);
                  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProd()    
  }, [])

  const columns = (deleteProd) => [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'image',
      dataIndex: 'image',
      render: (img)=>{
        return <img width={200} src={img}/>
      }
    },
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'price',
      dataIndex: 'price',
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: 'actions',
      dataIndex: 'action',
      render : (_,prod)=>{
        return <button onClick={()=>deleteProd(prod._id)} style={{padding:'13px'}}>delete</button>
      }
    },
  ];

  const deleteProd = async (id)=>{
    const res = await axios.delete(`${DB_URl}/products/${id}`)
    getProd()
  }
  



  return (
    <>
    <Table dataSource={prod} columns={columns(deleteProd)} />;
    </>
  )
}

export default AdminTable