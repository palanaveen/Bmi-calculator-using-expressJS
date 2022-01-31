const express = require('express')
const app = express()
const port = 3000
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/bmiCalculator', function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");// absolute path
  //__dirname refers to path of the curerent directory
})
app.post('/bmiCalculator',  function(req,res){
  // console.log(req.body);
  var num1=Number(req.body.height);
  var num2=Number(req.body.weight);
  var ans=num2/(num1*num1);
  res.send("The result is "+ans);
});
app.get('/', function(req,res){
  res.sendFile(__dirname+"/index.html");// absolute path
  //__dirname refers to path of the curerent directory
})
app.post('/',  function(req,res){
  // console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var ans=num1+num2;
  res.send("The result is "+ans);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
