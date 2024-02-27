import {Link} from "react-router-dom"
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";


import "./index.css"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const Header=(props)=>
{

    const logoutAction=()=>
    {
        const {history}=props
        history.push("/login")
        Cookies.remove("jwt_token")
    }



    return(
        <div className="nav-container">
             <Link to="/">
         <img src="https://i.pinimg.com/736x/6f/ae/98/6fae982b281d44dada4beae5d13987b4.jpg" alt="web-logo" className="img-logo-header"/></Link>
         <div className="nav-card-2">  
         <Link to="/account">
         <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="profile" className="profile-img"/>
         </Link>
         <div>
         <button className="logout-button" onClick={logoutAction}>Logout</button>
         <button className="lg-btn" onClick={logoutAction}>
            <FiLogOut color="white" size={30}/>
         </button>
         </div> 
        </div>   
       
        </div>
    )
}


export default withRouter(Header)