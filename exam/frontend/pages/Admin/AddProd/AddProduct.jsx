import axios from "axios";
import { DB_URl } from "../../../services/base";
import * as Yup from 'yup';
import {Field, Form, Formik} from 'formik'
import { Input } from "antd";
import './index.css'

const ProdSchema = Yup.object().shape({
  title: Yup.string().min(5,'min 5').max(15,'max 15').required(),
  image: Yup.string().url('enter valid url').required(),
  description: Yup.string().min(10,'min 10').max(30, 'max 30').required(),
  price: Yup.number().min(1,'more than 0').max(333 , 'minimum than 333').required()
});
const AddProduct = () => {
  
  return (
    <>
    <Formik
       initialValues={{ image : '',title : '',description : '',price : '' }}
       validationSchema={ProdSchema}
       onSubmit={ async (values, { resetForm }) => {
        const data = {...values}
        console.log('salam');
        
         const newdata = await axios.post(`${DB_URl}/products`,data)
         resetForm()
       }}
     >
       {({    
         errors,
         touched,
         handleSubmit,
       }) => (
         <Form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <Field name="title" />
          {errors.title && touched.title ? 
          <p >{errors.title}</p> : null}
          <label htmlFor="description">Description</label>
          <Field name="description" />
          {errors.description && touched.description ? 
          <p >{errors.description}</p> : null}
          <label htmlFor="image">Image</label>
          <Field name="image" />
          {errors.image && touched.image ? 
          <p >{errors.image}</p> : null}
          <label htmlFor="price">Price</label>
          <Field name="price" />
          {errors.price && touched.price ? 
          <p >{errors.price}</p> : null}
           <button type="submit" >
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default AddProduct