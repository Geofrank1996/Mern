import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import image from '../Components/assets/Furniro.png'
import './login.css'



function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:3001/", {
        email, password
      })
        .then(res => {
          if (res.data == "Login Sucessfully") {
            history("/home", { state: { id: email } })
          }
          else if(res.data=="The password is incorrect"){
            alert("Email or Password in invalid")
          }
          else{
            alert("User have not sign up")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  }


  return (
    <section className="loginsec">
      <div className="imgbx">
        <img src={image} />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form>
            <div className="inputBx">
              <span>Email</span>
              <input type="text" onChange={(e) => { setEmail(e.target.value) }} name="" />

            </div>
            <div className="inputBx" style={{ paddingBottom: "60px" }}>
              <span>Password</span>
              <input type="password" onChange={(e) => { setPassword(e.target.value) }}
                name="" />
            </div>



            <div className="inputBx">
              <input type="submit" onClick={submit} value="Login" />
              <p>Don't have an account, <Link to="/signup">Signup Here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login