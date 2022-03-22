const express = require('express')
const app = express()
app.use((request,response,next)=>{
  console.log('有人请求服务器了')
  console.log('Host',request.get('Host'))
  console.log('Referer',request.get('Referer'))
  console.log('url',request.url)
  // response.setHeader('Access-Control-Allow-Origin','*')
  next()
})

app.get('/students',(request,response)=>{
  const students = [
    {id: '001',name: 'tom',age: 18}, 
    {id: '002',name: 'jerry',age: 19}, 
    {id: '003',name: 'tony',age: 20}, 
  ]
  response.send(students)
})

app.listen(5000,(err)=>{
  if(!err){
    console.log('服务器启动了 localhost:5000')
  }
})