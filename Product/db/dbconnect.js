var mysql=require('mysql');

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"123456",
    "port":3306,
    "database":"express"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("Connewction not established");
    }
    else{
        console.log("connection established")
    }
})

module.exports=mysqlconnection;