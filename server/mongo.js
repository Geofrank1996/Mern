const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://geofrank:HIgeo12345_@cluster0.bd3aw4o.mongodb.net/db?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection