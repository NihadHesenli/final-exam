import { NavLink } from "react-router-dom"
import './index.css'

const AdminHeader = () => {
  return (
    <>
    <div className="header">
        <div className="head">
            <h1 className="admin-logo">Admin</h1>
            <nav>
                <ul className="admin-ul">
                    <li>
                        <NavLink to={'/admin'} className={"admin-a"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/admin-table'} className={"admin-a"}>Admin Table</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/add-product'} className={"admin-a"}>Add Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </>
  )
}

export default AdminHeader