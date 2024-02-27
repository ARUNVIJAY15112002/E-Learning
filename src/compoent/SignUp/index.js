import {Component} from "react"
import "./index.css"


      
class SignUp extends Component
{
    state={name:"",phone:"",mail:"",password:"",errorMsg:false}

    getName=(e)=>
    {
        this.setState({name:e.target.value})
    }

    getphone=(e)=>
    {
        this.setState({phone:e.target.value})
    }

    getmail=(e)=>
    {
        const {mail}=this.state
        this.setState({mail:e.target.value})
    }

    getpassword=(e)=>
    {
        this.setState({password:e.target.value})
    }

    getDetails=(e)=>{
        const{name,mail,phone,password}=this.state
        e.preventDefault()
        if(name!=="" && phone!=="" && mail!=="" && password!=="")
        {
            console.log(1)
            this.setState({errorMsg:false})
            localStorage.setItem("name",name)
            localStorage.setItem("password",password)
            const {history}=this.props
            history.replace("/login")
        }
        else
        {
            this.setState({errorMsg:true})

        }
    }


    render()
    {
        const {errorMsg}=this.state
        return(
            <div className="login-container">
                <form className="form-container" onSubmit={this.getDetails}>
                <h1 className="create-account">Create Account</h1>
                <img src="https://i.pinimg.com/736x/6f/ae/98/6fae982b281d44dada4beae5d13987b4.jpg" alt="web-logo" className="img-login"/>
                <input type="text" className="ip-style" placeholder="Full Name" onChange={this.getName}/>
                <input type="text" className="ip-style" placeholder="Phone"  onChange={this.getphone}/>
                <input type="text" className="ip-style" placeholder="Email"  onChange={this.getmail}/>
                <input type="password" className="ip-style" placeholder="Password"  onChange={this.getpassword}/>
                {errorMsg&&(<p className="err-msg">*kindly fill all the details</p>)}
                <button type="submit" className="submit-form">sign up</button>
                </form>
               
            </div>
        )
    }
}

export default SignUp