const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const router=require("./routers/routers")
const cors=require("cors")



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use("/",router)
app.listen(3002,function(){
    console.log("running on 302=02")
})

module.exports=app;