import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import image from '../Components/assets/Furniro.png'
import './signup.css'


function Signup() {
    const history = useNavigate();
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("https://mernserver.vercel.app/signup", {
                name,email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/", { state: { id: email } })
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
        <section className="signupsec">
            <div class="imgbx">
                <img src={image} />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h1>Create an account</h1>
                    <h3>Let's get started with your 30 days free trial</h3>

                    <form>
                        <div className="inputBx">
                            <span>Name</span>
                            <input type="text" onChange={(e) => { setName(e.target.value) }} name="" />

                        </div>
                        <div className="inputBx">
                            <span>Email</span>
                            <input type="text" onChange={(e) => { setEmail(e.target.value) }} name="" />

                        </div>
                        <div className="inputBx" style={{ marginBottom: "60px" }}>
                            <span>Password</span>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} name="" />
                        </div>
 


                        <div className="inputBx">
                            <input type="submit" onClick={submit} value="Create Account" />
                            <p>Don't have an account, <Link to="/">SignIn Here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup
