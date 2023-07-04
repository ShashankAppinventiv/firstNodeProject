const http=require('http')
// const service=require('./service')
// const sum=require('./controller/sum')

// what is port

const port=3000;


const server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.write("Server responded")
    console.log(res.url)
    res.end();

}
else if(req.url=='/user'){
    res.write("2nd request fulfilled");
    res.end();
}
}).listen(port)