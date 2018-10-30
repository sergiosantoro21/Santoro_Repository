




var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(express.static('dist'));

//var data = require('./file.json');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./file.json');
const db = low(adapter);

app.use(bodyParser.json());


app.get('/articoli',function(req,res){
    res.setHeader('Content-Type','application/json');
    res.send(db);
});


app.post('/articles', function (req, res) {
    // retrieve user posted data from the body

const idB = req.body.id;
 var like = (req.body.like === 'true');
 //console.log('log in arrivo dal client:' +like);
 //console.log('valore da inserire nel db:' + !like);
 db.get('articles')
   .find({ Id: Number(idB)})
   .assign({Like: !like })
   .write();
 res.send('ok');
});


app.listen(3000,function(){
  console.log("Example");
});
