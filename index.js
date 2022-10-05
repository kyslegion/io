
let port=4000;
let x =__dirname;
let express = require('express');
let app = express();
let path =require('path');
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + '/style'))
app.use(express.static(__dirname + '/'))


io.on("connection",(socket)=>{
    socket.on('event',(event)=>{
        console.log(event);
        app.get('/cata',(req,res)=>{
            res.render('catalogue', {
                event:event
            });
        });
        // socket.emit('three',({products}))
    });
});
console.log("lol");


app.get('/',(req,res)=>{
    res.render('index', {
    });
});

http.listen(port, '0.0.0.0',()=>{
  console.log(port);
});
