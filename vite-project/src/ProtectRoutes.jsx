import { Navigate, Outlet } from "react-router";
import LoginComponent from "./Login";
import Home from "./Home";



const ProtectdRouts = ()=> {
console.log("check")
    const log = localStorage.getItem('user');
    
    const logCheck = JSON.parse(log);
    
    if(logCheck){
      return <Home/>
    }
    else {
        return <Navigate to = "/loginComponent"/>
    }

}


export default ProtectdRouts