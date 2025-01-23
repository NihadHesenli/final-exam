import { Outlet } from "react-router-dom"
import AdminHeader from "../../companents/Admin/AdminHeader"

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    </>
  )
}

export default AdminLayout