const express =require("express")

const app=express();
const port=3000
//Working Check
app.get('/',(req,res)=>{

    res.send("Server responding \n Please make some changes to URL to perform operations")
    res.end()
})



//Addition function

app.get('/addition/:a/:b',(req,res)=>{
    res.send("Addition of two number is "+(Number(req.params.a)+Number(req.params.b)))
    res.end()
})


//subtract function

app.get('/subtraction/:a/:b',(req,res)=>{
    res.send("subtraction of two number is "+(Number(req.params.a)-Number(req.params.b)))
    res.end()
})

//multiplication function

app.get('/multiplication/:a/:b',(req,res)=>{
    res.send("multiplication of two number is "+(Number(req.params.a)*Number(req.params.b)))
    res.end()
})

//division function

app.get('/division/:a/:b',(req,res)=>{
    res.send("division of two number is "+(Number(req.params.a)/Number(req.params.b)))
    res.end()
})

//Listener Function

app.listen(port,(error)=>{
    if(!error){
        console.log("Working in listener")
    }else{
        console.log("Not Working")
    }
})