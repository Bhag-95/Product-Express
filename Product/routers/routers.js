const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/products",(req,resp)=>{
connection.query("select * from products",(err,data)=>{
    if(err){
        resp.status(500).send("Data NOt FOund"+JSON.stringify(err))
    }
    else{
        resp.send(data);
    }
})

})

router.get("/products/product/:id",(req,resp)=>{
    connection.query("select * from products where id=?",[req.params.id],(err,data)=>{
        if(err){
            resp.status(500).send(err);
        }
        else{
            resp.send(data);
        }
    })
})

router.post("/products",(req,resp)=>{
    connection.query("insert into products values(?,?,?)",[req.body.id,req.body.name,req.body.qty],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'Inserted'}")
            }
            else{
                resp.send("{'msg':'Not Inseted'}")
            }
        }
    })
})

router.put("/products/:id",(req,resp)=>{
    connection.query("update products set name=?,qty=? where id=?",[req.body.name,req.body.qty,req.body.id],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'Inserted'}")
            }
            else{
                resp.send("{'msg':'Not Inseted'}")
            } 
        }
    })
})

router.delete("/products/:id",(req,resp)=>{
    connection.query("delete from products where id=?",[req.params.id],(err,result)=>{
        if(err){
            resp.status(500).send(JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0){
                resp.send("{'msg':'Inserted'}")
            }
            else{
                resp.send("{'msg':'Not Inseted'}")
            } 
        }
    })
})

module.exports=router;