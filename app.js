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

var bucket = process.env.bucket ? process.env.bucket : "";

var drina = {	"category" : "drina",
	"gallerySize" : "7",
	"collectionName" : "Drina Collection",
	"pots": [
		{
			"name":"DRINA 90",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "90cm",
							"Height" : "42cm",
							"Opening diameter" : "80cm",
							"Volume" : "205l",
							"Weight" : "8kg"
						}
		},
		{
			"name":"DRINA 105",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "105cm",
							"Height" : "49cm",
							"Opening diameter" : "95cm",
							"Volume" : "325l",
							"Weight" : "14.5kg"
						}
		},
		{
			"name":"DRINA 120",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "120cm",
							"Height" : "55cm",
							"Opening diameter" : "110cm",
							"Volume" : "472l",
							"Weight" : "19.5kg"
						}
		},
		{
			"name":"DRINA 200",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "200cm",
							"Height" : "93cm",
							"Opening diameter" : "190cm",
							"Volume" : "2 150l",
							"Weight" : "64kg"
						}
		}
	]
};

var drinars = {	"category" : "drina",
	"gallerySize" : "7",
	"collectionName" : "Drina Kolekcija",
	"pots": [
		{
			"name":"DRINA 90",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "90cm",
							"Visina" : "42cm",
							"Prečnik otvora" : "80cm",
							"Zapremina" : "205l",
							"Težina" : "8kg"
						}
		},
		{
			"name":"DRINA 105",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "105cm",
							"Visina" : "49cm",
							"Prečnik otvora" : "95cm",
							"Zapremina" : "325l",
							"Težina" : "14.5kg"
						}
		},
		{
			"name":"DRINA 120",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "120cm",
							"Visina" : "55cm",
							"Prečnik otvora" : "110cm",
							"Zapremina" : "472l",
							"Težina" : "19.5kg"
						}
		},
		{
			"name":"DRINA 200",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "200cm",
							"Visina" : "93cm",
							"Prečnik otvora" : "190cm",
							"Zapremina" : "2 150l",
							"Težina" : "64kg"
						}
		}
	]
}

var oblo = {	"category" : "oblo",
	"gallerySize" : "4",
	"collectionName" : "Oblo Collection",
	"pots": [
		{
			"name":"OBLO 55",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "55cm",
							"Height" : "68cm",
							"Opening diameter" : "45cm",
							"Volume" : "120l",
							"Weight" : "11kg"
						}
		},
		{
			"name":"OBLO 76",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "76cm",
							"Height" : "86cm",
							"Opening diameter" : "66cm",
							"Volume" : "140l",
							"Weight" : "18kg"
						}
		},
		{
			"name":"OBLO 98",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "98cm",
							"Height" : "67.5cm",
							"Opening diameter" : "88cm",
							"Volume" : "350l",
							"Weight" : "20kg"
						}
		},
		{
			"name":"OBLO 116",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "116cm",
							"Height" : "88cm",
							"Opening diameter" : "106cm",
							"Volume" : "650l",
							"Weight" : "32kg"
						}
		},
		{
			"name":"OBLO 144",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "144cm",
							"Height" : "106cm",
							"Opening diameter" : "134cm",
							"Volume" : "1 260l",
							"Weight" : "72kg"
						}
		}
	]
}

var oblors = {	"category" : "oblo",
	"gallerySize" : "4",
	"collectionName" : "Oblo Kolekcija",
	"pots": [
		{
			"name":"OBLO 55",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "55cm",
							"Visina" : "68cm",
							"Prečnik otvora" : "45cm",
							"Zapremina" : "120l",
							"Težina" : "11kg"
						}
		},
		{
			"name":"OBLO 76",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "76cm",
							"Visina" : "86cm",
							"Prečnik otvora" : "66cm",
							"Zapremina" : "140l",
							"Težina" : "18kg"
						}
		},
		{
			"name":"OBLO 98",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "98cm",
							"Visina" : "67.5cm",
							"Prečnik otvora" : "88cm",
							"Zapremina" : "350l",
							"Težina" : "20kg"
						}
		},
		{
			"name":"OBLO 116",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "116cm",
							"Visina" : "88cm",
							"Prečnik otvora" : "106cm",
							"Zapremina" : "650l",
							"Težina" : "32kg"
						}
		},
		{
			"name":"OBLO 144",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "144cm",
							"Visina" : "106cm",
							"Prečnik otvora" : "134cm",
							"Zapremina" : "1 260l",
							"Težina" : "72kg"
						}
		}
	]
}

var round = {	"category" : "round",
	"gallerySize" : "4",
	"collectionName" : "Round Collection",
	"pots": [
		{
			"name":"ROUND 50",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "50cm",
							"Height" : "70cm",
							"Opening diameter" : "40cm",
							"Volume" : "113l",
							"Weight" : "7.4kg"
						}
		},
		{
			"name":"ROUND 55",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "55cm",
							"Height" : "55cm",
							"Opening diameter" : "45cm",
							"Volume" : "105l",
							"Weight" : "6.8kg"
						}
		},
		{
			"name":"ROUND 65",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "65cm",
							"Height" : "80cm",
							"Opening diameter" : "55cm",
							"Volume" : "220l",
							"Weight" : "11kg"
						}
		},
		{
			"name":"ROUND 70",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "70cm",
							"Height" : "100cm",
							"Opening diameter" : "60cm",
							"Volume" : "320l",
							"Weight" : "14.5kg"
						}
		},
		{
			"name":"ROUND 90",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "90cm",
							"Height" : "125cm",
							"Opening diameter" : "80cm",
							"Volume" : "690l",
							"Weight" : "23kg"
						}
		}
	]
}

var roundrs = {	"category" : "round",
	"gallerySize" : "4",
	"collectionName" : "Round Collection",
	"pots": [
		{
			"name":"ROUND 50",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "50cm",
							"Visina" : "70cm",
							"Prečnik otvora" : "40cm",
							"Zapremina" : "113l",
							"Težina" : "7.4kg"
						}
		},
		{
			"name":"ROUND 55",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "55cm",
							"Visina" : "55cm",
							"Prečnik otvora" : "45cm",
							"Zapremina" : "105l",
							"Težina" : "6.8kg"
						}
		},
		{
			"name":"ROUND 65",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "65cm",
							"Visina" : "80cm",
							"Prečnik otvora" : "55cm",
							"Zapremina" : "220l",
							"Težina" : "11kg"
						}
		},
		{
			"name":"ROUND 70",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "70cm",
							"Visina" : "100cm",
							"Prečnik otvora" : "60cm",
							"Zapremina" : "320l",
							"Težina" : "14.5kg"
						}
		},
		{
			"name":"ROUND 90",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "90cm",
							"Visina" : "125cm",
							"Prečnik otvora" : "80cm",
							"Zapremina" : "690l",
							"Težina" : "23kg"
						}
		}
	]
}

var standard = {	"category" : "standard",
	"gallerySize" : "3",
	"collectionName" : "Standard Collection",
	"pots": [
		{
			"name":"STANDARD",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Width" : "Any",
							"Height" : "Any",
							"Length" : "Any",
							"Volume" : "Any",
							"Weight" : "-"
						}
		}
	]
}

var standardrs = {	"category" : "standard",
	"gallerySize" : "3",
	"collectionName" : "Standard Kolekcija",
	"pots": [
		{
			"name":"STANDARD",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Širina" : "Any",
							"Visina" : "Any",
							"Dužina" : "Any",
							"Zapremina" : "Any",
							"Težina" : "-"
						}
		}
	]
}

var tara = {	"category" : "tara",
	"gallerySize" : "5",
	"collectionName" : "Tara Collection",
	"pots": [
		{
			"name":"TARA 90",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "90cm",
							"Height" : "42cm",
							"Opening diameter" : "80cm",
							"Volume" : "198l",
							"Weight" : "6kg"
						}
		},
		{
			"name":"TARA 105",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "105cm",
							"Height" : "49cm",
							"Opening diameter" : "95cm",
							"Volume" : "315l",
							"Weight" : "14.6kg"
						}
		},
		{
			"name":"TARA 120",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "120cm",
							"Height" : "55cm",
							"Opening diameter" : "110cm",
							"Volume" : "448l",
							"Weight" : "19.5kg"
						}
		}
	]
}

var tarars = {	"category" : "tara",
	"gallerySize" : "5",
	"collectionName" : "Tara Collection",
	"pots": [
		{
			"name":"TARA 90",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "90cm",
							"Visina" : "42cm",
							"Prečnik otvora" : "80cm",
							"Zapremina" : "198l",
							"Težina" : "6kg"
						}
		},
		{
			"name":"TARA 105",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "105cm",
							"Visina" : "49cm",
							"Prečnik otvora" : "95cm",
							"Zapremina" : "315l",
							"Težina" : "14.6kg"
						}
		},
		{
			"name":"TARA 120",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "120cm",
							"Visina" : "55cm",
							"Prečnik otvora" : "110cm",
							"Zapremina" : "448l",
							"Težina" : "19.5kg"
						}
		}
	]
}

var tisa = {	"category" : "tisa",
	"gallerySize" : "3",
	"collectionName" : "Tisa Collection",
	"pots": [
		{
			"name":"TISA 43",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "43cm",
							"Height" : "43cm",
							"Opening diameter" : "33cm",
							"Volume" : "47l",
							"Weight" : "3.8kg"
						}
		},
		{
			"name":"TISA 50",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "50cm",
							"Height" : "70cm",
							"Opening diameter" : "40cm",
							"Volume" : "107l",
							"Weight" : "7.6kg"
						}
		},
		{
			"name":"TISA 60",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "60cm",
							"Height" : "80cm",
							"Opening diameter" : "50cm",
							"Volume" : "177l",
							"Weight" : "10.3kg"
						}
		},
		{
			"name":"TISA 70",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "70cm",
							"Height" : "100cm",
							"Opening diameter" : "60cm",
							"Volume" : "305l",
							"Weight" : "17.8kg"
						}
		},
		{
			"name":"TISA 90",
			"type":"Indoor | Outdoor Planter",
			"attributes": {
							"Diameter" : "90cm",
							"Height" : "125cm",
							"Opening diameter" : "80cm",
							"Volume" : "654l",
							"Weight" : "34.5kg"
						}
		}
	]
}

var tisars = {	"category" : "tisa",
	"gallerySize" : "3",
	"collectionName" : "Tisa Collection",
	"pots": [
		{
			"name":"TISA 43",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "43cm",
							"Visina" : "43cm",
							"Prečnik otvora" : "33cm",
							"Zapremina" : "47l",
							"Težina" : "3.8kg"
						}
		},
		{
			"name":"TISA 50",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "50cm",
							"Visina" : "70cm",
							"Prečnik otvora" : "40cm",
							"Zapremina" : "107l",
							"Težina" : "7.6kg"
						}
		},
		{
			"name":"TISA 60",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "60cm",
							"Visina" : "80cm",
							"Prečnik otvora" : "50cm",
							"Zapremina" : "177l",
							"Težina" : "10.3kg"
						}
		},
		{
			"name":"TISA 70",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "70cm",
							"Visina" : "100cm",
							"Prečnik otvora" : "60cm",
							"Zapremina" : "305l",
							"Težina" : "17.8kg"
						}
		},
		{
			"name":"TISA 90",
			"type":"Enterijer | Eksterijer",
			"attributes": {
							"Prečnik" : "90cm",
							"Visina" : "125cm",
							"Prečnik otvora" : "80cm",
							"Zapremina" : "654l",
							"Težina" : "34.5kg"
						}
		}
	]
}

const collections = {
	drina: drina,
	drinars: drinars,
	oblo: oblo,
	oblors: oblors,
	round: round,
	roundrs: roundrs,
	standard: standard,
	standardrs: standardrs,
	tara: tara,
	tarars: tarars,
	tisa: tisa,
	tisars: tisars
};

//PORT Listening
http.listen(process.env.PORT, function(){
	console.log('TERAPOT WEBSITE');
	console.log('Server Started');
});

server.get('/',function(req,res){
	res.render('home',{
		ogImage: bucket+"/images/og/ogImageHome.jpg",
		bucket: bucket,
		lang:"en"
	});	
});

server.get('/rs',function(req,res){
	res.render('homers',{
		ogImage: bucket+"/images/og/ogImageHome.jpg",
		bucket: bucket,
		lang:"sr"
	});	
});

server.get('/about',function(req,res){
	res.render('about',{
		ogImage: bucket+"/images/og/ogImageAbout.jpg",
		bucket: bucket,
		lang:"en"
	});	
});

server.get('/rs/o-nama',function(req,res){
	res.render('aboutrs',{
		ogImage: bucket+"/images/og/ogImageAbout.jpg",
		bucket: bucket,
		lang:"sr"
	});	
});

server.get('/why-fiberglass',function(req,res){
	res.render('why-fiberglass',{
		ogImage: bucket+"/images/og/ogImageWhy.jpg",
		bucket: bucket,
		lang:"en"
	});	
});

server.get('/rs/zasto-fiberglas',function(req,res){
	res.render('why-fiberglassrs',{
		ogImage: bucket+"/images/og/ogImageWhy.jpg",
		bucket: bucket,
		lang:"sr"
	});	
});

server.get('/catalog',function(req,res){
	res.render('catalog',{
		ogImage: bucket+"/images/og/ogImageHome.jpg",
		bucket: bucket,
		lang:"en"
	});	
});

server.get('/pots/:pot',function(req,res){
	if(collections[req.params.pot]){
		var potInfo	=	collections[req.params.pot];
		res.render('pot',{
			potInfo: potInfo,
			ogImage: bucket+"/pots/"+potInfo.category+"/ogImage.jpg",
		bucket: bucket,
			lang:"en"
		});	
	}else{
		res.send("Not found pot")
	}
});

server.get('/rs/saksije/:pot',function(req,res){
	if(collections[req.params.pot+"rs"]){
		var potInfo	=	collections[req.params.pot+"rs"];
		res.render('pot',{
			potInfo: potInfo,
			ogImage: bucket+"/pots/"+potInfo.category+"/ogImage.jpg",
			bucket: bucket,
			lang:"sr"
		});	
	}else{
		res.send("Not found pot")
	}
});