const express =  require('express');
const app = express();

const cookieParser = require("cookie-parser");
const path = require('path');
const db = require('./config/mongoos-connection')
const ownersRouters = require('./routes/ownersRouters')
const usersRouters = require('./routes/usersRouters')
const productsRouters = require('./routes/productsRouters')


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , 'public')));
app.set("view engine" , 'ejs');
app.get("/" , (req , res) => { res.send('hey')} );

app.use('/owners' , ownersRouters)
app.use('/users' , usersRouters)
app.use('/Products' , productsRouters)
    





app.listen(3000)


