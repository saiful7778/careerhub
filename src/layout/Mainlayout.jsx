import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Mainlayout = () => {
  return (
    <div>
      <ul className="flex gap-5">
        <li>
          <NavLink to='/careerhub/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/careerhub/joblist'>Joblist</NavLink>
        </li>
        <li>
          <NavLink to='/careerhub/joblist/jobdetails'>JobDetails</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Mainlayout