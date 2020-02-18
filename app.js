const express = require("express");
const exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');


const app = express();

//This allows express to make my static content avialable from the public
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>{

    res.render("home",{
        title: "Home page",
        headingInfo : "Home Page"
    });
});

app.get("/contactus",(req,res)=>{

    res.render("contactus",{
        title: "contactus page",
        headingInfo : "contactus Page"

    });

});
app.get("/product",(req,res)=>{

    res.render("product",{
        title: "product Page",
        headingInfo : "product Page",

    });


});





const PORT=process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Web server is up and running`);
})
