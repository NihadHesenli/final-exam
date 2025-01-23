import {useNavigate} from 'react-router-dom'
const NotFound = () => {
  const nav = useNavigate()
  return (
    <>
    <div>NotFound</div>
    <button onClick={()=>{nav(-1)}}>Go back</button>
    </>
  )
}

export default NotFound