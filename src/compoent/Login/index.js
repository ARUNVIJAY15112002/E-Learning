import {Component} from "react"
import Cookies from "js-cookie"

import "./index.css"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"


      
class Login extends Component
{
    state={name:"",password:"",errorMsg1:false,errorMsg2:false}

   

    getName=(e)=>
    {
        this.setState({name:e.target.value})
    }


    getpassword=(e)=>
    {
        this.setState({password:e.target.value})
    }

    getDetails=(e)=>{
        const{name,mail,phone,password}=this.state
        const Fullname=localStorage.getItem("name")
        const userPassword=localStorage.getItem("password")
        e.preventDefault()
        if(name===Fullname && password===userPassword)
        {
            
            this.setState({errorMsg:false})
            Cookies.set('jwt_token', 'success', { expires: 7 })
            const {history}=this.props
            history.replace("/")
            
        }
        else if(name==="" || password==="")
        {
            this.setState({errorMsg1:true})
            this.setState({errorMsg2:false})


        }

        else    
        {
            this.setState({errorMsg2:true})
            this.setState({errorMsg1:false})

        }
    }

    submitSignUp=()=>
    {
        const {history}=this.props
        history.replace("/signup")
    }


    render()
    {
        const {errorMsg1,errorMsg2}=this.state
      
        return(
            <>
            <div className="login-container">
                <form className="form-container" onSubmit={this.getDetails}>
                <h1 className="create-account">Please Login</h1>
                <img src="https://i.pinimg.com/736x/6f/ae/98/6fae982b281d44dada4beae5d13987b4.jpg" alt="web-logo" className="img-login"/>
                <input type="text" className="ip-style-login" placeholder="Full Name" onChange={this.getName}/>
                <input type="password" className="ip-style-login" placeholder="Password"  onChange={this.getpassword}/>
                {errorMsg1&&(<p className="err-msg">*kindly fill all the details</p>)}
                {errorMsg2&&(<p className="err-msg">*Please check the Fullname or the Password</p>)}
                <div className="btn-container">  
                <button type="submit" className="submit-form">Login</button>
                <button type="button" className="submit-form" onClick={this.submitSignUp}>Sign Up</button>
                </div>
               
                </form>
               
            </div>
            </>
        )
      
    
    
            

    }
}

export default Login