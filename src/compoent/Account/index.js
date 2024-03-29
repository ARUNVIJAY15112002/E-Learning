import Cookies from 'js-cookie'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Account = props => {
  
  const Logout=()=>
  {
      const {history}=props
      history.push("/login")
      Cookies.remove("jwt_token")
  }


  const name=localStorage.getItem("name")

  return (
    <div className="Account_container">
      <Header />
      <div className="Account_card">
        <h1 className="Account">Account</h1>
        <hr className="hr1" />
        <h1 className="Member_ship">Member ship</h1>
        <p className="gmail">{name}@gmail.com</p>
        <p className="Password">Password : ************</p>
        <hr className="hr2" />
        <h1 className="plain_details">Plan details</h1>
        <p className="premium">Premium </p>
        <hr className="hr3" />
        <button className="logout_button" type="button" onClick={Logout}>
          Logout
        </button>
      </div>
      <div className="account_footer">
        <Footer />
      </div>
    </div>
  )
}
export default Account