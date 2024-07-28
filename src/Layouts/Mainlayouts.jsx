import { Outlet } from "react-router-dom"
import Nav from "../Components/nav"

export default function Mainlayouts() {
  return (
    <div>
     <div className="h-20">
     <Nav></Nav>
     </div>
     <Outlet></Outlet>
    </div>
  )
}
