

import express from "express"
import path from "path"

export const startServer = (options)=>{
    const {port, public_path='public'}= options

  const app = express()
 

 //with this code(use) you will be able to use middlewares
  app.use(express.static(public_path))
  
  app.get('*',(req,res)=>{

    const indexPath = path.join(__dirname + `../../../${public_path}/challengeHTML/encriptador.html`) 
    res.sendFile(indexPath) 

  })
  app.listen(port, ()=>{
    console.log(`listening in the port ${port}`)
  })

}
