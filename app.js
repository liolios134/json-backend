const express = require ('express');
const cors = require ('cors');
const app = express ();
const homy = require ('./homy.json');
const about = require ('./about.json');
const contact = require ('./contact.json');
const products = require ('./products.json');
app.listen(3000);
app.use(cors());

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/homy", (req,res) =>{
    res.json(homy);
});

app.get("/products", (req,res) =>{
    res.json(products);
});

app.get("/products/:productId", (req, res) =>{
    const id = req.params.productId;
    let pro = null;
    for(let p of products.products){
        if(id == p._id) {
             pro = p;
        }
    }
    if (pro == null) {
        res.json({
            message: "Den vre8ike"
        });
    } else {
        res.json(pro);
    }
});

app.get("/about", (req,res) =>{
    res.json(about);
});

app.get("/contact", (req,res) =>{
    res.json(contact);
});



app.get("/product-v2/:productId", (req, res)=>{
    const id = req.params.productId;
    const productFound = products.find(p => p._id == id);
    res.json(productFound);
});