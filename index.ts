import express from "express";
const cookieParser = require('cookie-parser');
require("dotenv").config();
const PORT__DEV = 3000;
//const sequelize = require("./db");
const http=require('node:http')
import cors from "cors";
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(cookieParser());
const request = require('request');
const url = 'https://gps.mobiteam.com.ua/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3'; 
var answer = '';
var answer2 = ''
const cock='set-cookie'


// request({
//   method: 'GET',
//   header: {
//     'set-cookie': '.ASPXAUTH=; expires=Mon, 11-Oct-1999 21:00:00 GMT; path=/; HttpOnly; SGUID=session_id=a3ff909f-5ba6-4ed6-b19c-8580589af32d&Culture=en-us&langfile=ext-lang-en.js&msgfile=msg-lang-en.js&login=; path=/'
//   },
//   url: 'https://gps.mobiteam.com.ua/api/integration/v1/objectsupdateinfo',
//   // параметры GET-запроса
//   // index.php?param=edit&value=10
//   qs: {
//     param: 'edit',
//     value: 100
//   }
//  },
//   function (error:any, response:any, body:any) {
//  if (!error && response.statusCode == 200) {
//    //console.log(response.headers[cock]);
//    // валидация и 
//    // обработка полученного ответа, заголовков
//   //  answer2 = response;
//   //  console.log(body)
//    console.log(response)
//    //console.log(error)  
//  }
//    console.log(body)
//    console.log(response)
//    console.log(error)
// })












// request({
//   method: 'GET',
//   url: 'https://gps.mobiteam.com.ua/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3',
//   // параметры GET-запроса
//   // index.php?param=edit&value=10
//   qs: {
//     param: 'edit',
//     value: 100
//   }
//  },
//   function (error:any, response:any, body:any) {
//  if (!error && response.statusCode == 200) {
//    console.log(response.headers[cock]);
//   //  // валидация и 
//   //  // обработка полученного ответа, заголовков
//   //  answer2 = response;
//   //  console.log(body)
//   //  console.log(response)
  
//  }
// })







// const options={
//   hostname: 'https://gps.mobiteam.com.ua',
//         port: 80,
//         path: '/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3',
//         agent: false,
 
// }


// http.get(options, (res:any) => {
//   console.log(res)
// })
// const router = express.Router();
// router.get('/external-api', function(req:any, res:any){ 

//   request('https://gps.mobiteam.com.ua/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3', function (error:any, response:any, body:any) {
//         res.send(response.headers[cock])
//   });

// })


// const start2 = async () => {
//  await request({
//     method: 'GET',
//     url: url,
//     // параметры GET-запроса
//     // index.php?param=edit&value=10
//     qs: {
//       param: 'edit',
//       value: 100
//     }
//    },
//     function (error:any, response:any, body:any) {
//    if (!error && response.statusCode == 200) {
//      // валидация и 
//      // обработка полученного ответа, заголовков
//      answer = response.headers[cock];
    
//    }
//  })
// request({
//   method: 'GET',
//   header: {
//     'set-cookie': answer
//   },
//   url: 'https://gps.mobiteam.com.ua/api/integration/v1/objectsupdateinfo',
//   // параметры GET-запроса
//   // index.php?param=edit&value=10
//   qs: {
//     param: 'edit',
//     value: 100
//   }
//  },
//   function (error:any, response:any, body:any) {
//  if (!error && response.statusCode == 200) {
//    console.log(response.headers[cock]);
//    // валидация и 
//    // обработка полученного ответа, заголовков
//    answer2 = body;
//    console.log(response)
  
//  }
// })
// }

// app.get("/", async (req, res, next) => {
//   request({
//     method: 'GET',
//     header: {
//       'set-cookie': answer
//     },
//     url: url,
//     // параметры GET-запроса
//     // index.php?param=edit&value=10
//     qs: {
//       param: 'edit',
//       value: 100
//     }
//    },
//     function (error:any, response:any, body:any) {
//    if (!error && response.statusCode == 200) {
//      //console.log(response.headers[cock]);
//      // валидация и 
//      // обработка полученного ответа, заголовков
//      //answer2 = response.headers[cock];
//      console.log(response)
    
//    }
//   })
//   res.status(200).json(answer2);
// });


app.get("/", async (req, res, next) => {  
  res.status(200).json('work!!!');
});

const start = async () => {
  try {
    app.listen(PORT__DEV, () =>
      console.log(`Server started on port ${PORT__DEV}`)
      
    );
  } catch (e) {
    console.log(e);
  }
};

start();


