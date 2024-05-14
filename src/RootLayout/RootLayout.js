import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
export default function RootLayout(){
    return(
        <div className="main">  
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}