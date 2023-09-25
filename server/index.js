const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
        origin:["https://mernclient-six.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))



app.get("/",(req,res)=>{
    res.json("hello")

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email}).then(user =>{
            if(user){
                if(user.password===password){
                    res.json("Login Sucessfully")
                }
                else{
                    res.json("The password is incorrect")
                }
            }
            else{
                res.json("User not registered")
            }
        })

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body

    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3001,()=>{
    console.log("port connected");
})


