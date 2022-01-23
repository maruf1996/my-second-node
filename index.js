const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!, How are You')
})

const users=[
  {"id": 0,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz"},
  {"id": 1,"name": "Leanne vokku","username": "Bret","email": "vokku@april.biz"},
  {"id": 2,"name": "Leanne ghuttu","username": "Bret","email": "Sincere@april.biz"},
  {"id": 3,"name": "Leanne gittu","username": "Bret","email": "ghuttu@april.biz"},
  {"id": 4,"name": "Leanne hadaram","username": "Bret","email": "hadaram@april.biz"},
  {"id": 5,"name": "Leanne tandester","username": "Bret","email": "tandester@april.biz"}
]


app.get('/users',(req,res)=>{
  const search=req.query.search;
  // use query parameters
  if(search){
    const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(searchResult);
  }else{
    res.send(users);
  }
})

// app .METHOD

app.post('/users',(req,res)=>{
  const newUser=req.body;
  newUser.id=users.length;
  users.push(newUser);
  console.log('hitting the post',req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
})


//dynamic api

app.get('/users/:id',(req,res)=>{
  const id=req.params.id;
  const user=users[id];
  res.send(user);
  console.log(req.params.id)
})

app.get('/fruits',(req,res)=>{
  res.send(['mango','banana','orange','licchi'])
})

app.get('/fruits/mango/fazli',(req,res)=>{
  res.send("yammi yammi tok misti mango")
})

app.listen(port, () => {
  console.log(`Example app listening on port & this app ${port}`)
})