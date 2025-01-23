import { Outlet } from "react-router-dom"
import CLientFooter from "../../companents/Client/ClientFooter/CLientFooter"
import ClientHeader from "../../companents/Client/ClientHeader/ClientHeader"

const ClientLayout = () => {
  return (
   <>
   <ClientHeader/>
   <Outlet/>
   <CLientFooter/>
   </>
  )
}

export default ClientLayout