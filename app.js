//Server
var server				=	require('express')();
var http				=	require('http').Server(server);
var httpl 				=	require('http');
var net					=	require('net');
var express				=	require('express');
var fs					=	require('fs');   
var bodyParser			=	require('body-parser');
const dotenv 			=	require('dotenv');
dotenv.config();

server.set('view engine','ejs');
var viewArray	=	[__dirname+'/views'];
var viewFolder	=	fs.readdirSync('views');
for(var i=0;i<viewFolder.length;i++){
	if(viewFolder[i].split(".").length==1){
		viewArray.push(__dirname+'/'+viewFolder[i])
	}
}
server.set('views', viewArray);
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());  
server.use(bodyParser.urlencoded({ extended: true }));

//PORT Listening
http.listen(process.env.PORT, function(){
	console.log('TERAPOT WEBSITE');
	console.log('Server Started');
});

server.get('/',function(req,res){
	res.render('home',{});	
});

server.get('/about',function(req,res){
	res.render('about',{});	
});

server.get('/why-fiberglass',function(req,res){
	res.render('why-fiberglass',{});	
});

server.get('/pots/:pot',function(req,res){
	if(fs.existsSync("./public/pots/"+req.params.pot)){
		var potInfo	=	JSON.parse(fs.readFileSync("./public/pots/"+req.params.pot+"/info.json"));
		res.render('pot',{
			potInfo: potInfo
		});	
	}else{
		res.send("Nepostojeca vaza")
	}
});