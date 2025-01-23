import { createContext, useContext, useState } from "react"

export const WislistContext = createContext(null)

const WishlistProvide = ({children}) => {
  const [fav,setFav] = useState([])

  const favToogle = (prod)=>{
    const favItem = fav.find((p)=> p._id === prod._id)
    if (!favItem) {
      setFav((prev)=>[...prev,prod])
    }else{
      setFav((prev)=> prev.filter((item)=>item._id !== prod._id))
    }
  }

  const clearFav = ()=>{
    setFav([])
  }
  return (
    <WislistContext.Provider value={{fav,favToogle,clearFav}}>{children}</WislistContext.Provider>
  )
}

export default WishlistProvide