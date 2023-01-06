import express from 'express';
import bodyparser from 'body-parser';
import './model/mongo.js'
import Item  from './model/schemafile.js';
import cors from 'cors';


const app = express();

//to get request from react & CORS error
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  


// Parse JSON request body
app.use(bodyparser.json());



app.post('/api/items', async(req, res) => {
  //console.log("req recieved")
  let data= await Item.create(req.body)
  if (data)
  {console.log("data saved")
  return res.status(200).send("data saved");}
else
  return res.status(501).send("no data saved validation error")
  
  });
  



  app.get('/api/items', async (req, res) => {
    //console.log(req)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
  
    let data = await Item.find() .skip(skip) .limit(limit)
    if (data){
      console.log(`data fetched with skip of ${skip}`)
    return res.status(200).send(data);}
else
    return res.status(501).json({msg:"no data exist for this request"})
  });
  



const port= process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
