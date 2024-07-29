import { Outlet } from "react-router-dom"
import Nav from "../Components/nav"
import Footer from "../Components/Footer"

export default function Mainlayouts() {
  return (
    <div>
     <div className="h-20">
     <Nav></Nav>
     </div>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}
