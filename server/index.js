const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Gowtham@12345",
    database : "sqlpratice"
})

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.post('/Addfile',(request,response)=>{
    let imagefile = request.files.upload_file;
    let filename = imagefile.name;
    

    let url = 'http://localhost:3002/upload/';
    
    let path = __dirname+'/public/upload/'+imagefile.name;
    

    let sql = 'insert into file_store(file_name,file_object) values (?,?)';

    c.query(sql,[filename,url],(error,result)=>{})

    imagefile.mv(path, function(err) {
        if (err){
          let s = {"status":"error"};
          response.send(s);
        }
        else{
            let s = {"status":"uploaded"};
            response.send(s);
        }
      });

    //console.log(`${d} ${m} ${y}`);

});

app.get('/Viewfile',(request,response)=>{

    let sql = 'select * from file_store';
    c.query(sql,(error,result)=>{
        response.send(result);
    })
    

})

app.listen(3002);