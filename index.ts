import express from "express";
const cookieParser = require('cookie-parser');
require("dotenv").config();
const port = process.env.PORT || 3000;
import cors from "cors";
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(cookieParser());
const request = require('request');
const urlSesion = 'https://gps.mobiteam.com.ua/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3';
const urlTrucks= 'https://gps.mobiteam.com.ua/api/integration/v1/objectsupdateinfo';
let coockieRes = '';
let trucksRes = ''
const coockieVar='set-cookie'

const startRequests = async () => {
 await request({
    method: 'GET',
    url: urlSesion,
    qs: {
      param: 'edit',
      value: 100
    }
   },
    function (error:any, response:any, body:any) {
   if (!error && response.statusCode == 200) {
    coockieRes = response.headers[coockieVar];
    console.log(response.headers[coockieVar])
   }
 })
request({
  method: 'GET',
  header: {
    'set-cookie': `${coockieVar[0]}; ${coockieVar[1]}`
  },
  url:urlTrucks ,
  qs: {
    param: 'edit',
    value: 100
  }
 },
  function (error:any, response:any, body:any) {
 if (!error && response.statusCode == 200) {
  
  trucksRes = body;
   console.log(response)
  
 }
 trucksRes = body;
  console.log(response)
})
}



app.get("/", async (req, res, next) => {  
  res.status(200).json('work');
});

const start = async () => {
  try {
    app.listen(port,function(){
      console.log('started')
    });
  } catch (e) {
    console.log(e);
  }
};

start();
startRequests()


