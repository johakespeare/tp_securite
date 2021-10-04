let express = require("express")
let bodyParser = require('body-parser'); //permet de lire les POST
let app = express()
const router = express.Router();

const urlEncodedParser = bodyParser.urlencoded({extended: false})

//let userController = require("controller_user.js");

app.set('view engine', 'ejs');


//routes
app.get('/inscription',(request,response) => {
    response.render('inscription')
})

app.post('/inscription',urlEncodedParser,(request,response) => {
    response.json(request.body)
})

//router.post('/inscription', userController.create);



app.get('/ajouterImage',(request,response)=>{
    response.render('ajouterImage')
})

/*
app.post('/ajouterImage',urlEncodedParser,(request,response) => {
    response.json(request.body)
})*/


app.listen(8080)