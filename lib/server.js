var http 	= require("http"),
	https 	= require("https")

var	urlRegExp = /(http|https)(:\/\/)[a-z0-9.-_&\/?=]{5,}/gi
	
exports.google = function (gQuery, gPage, gCb){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// google search can be start :)
			gGelen = ""
			
			for(g=0;g<=arguments[1];g++){		
				
				gAyarlar = {
					host : "www.google.com.tr",
					path : "/search?q="+arguments[0]+"&start="+g+"&sa=N&gws_rd=ssl",
				}
				
				https.request(gAyarlar,(res)=>{
					
					res.on("data",(d)=>{
						gGelen += d;
					})
					
					res.on("end",()=>{
						var gSon = gGelen.match(urlRegExp)
						gCb(gSon)
					})
					
				}).end();
				
			}
				
		}else{
			gCb("Argument type error!")
		}
		
	}else{
		gCb("Function argument missed!")
	}
	
}

exports.yandex = function ( yQuery, yPage, yCb ){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// yandex search can be start :)
			yGelen = ""
			
			for(y=0;y<=arguments[1];y++){
				
				yAyarlar = {
					host : "www.yandex.com.tr",
					path : "/search/?lr=101515&text="+arguments[0]+"&p="+y
					
				}
				
				https.request(yAyarlar,(res)=>{
					
					res.on("data",(d)=>{
						yGelen += d;
					})
					
					res.on("end",()=>{
						
						var ySon = yGelen.match(urlRegExp)
						yCb(ySon)
						
					})
					
				}).end();
				
			}
			
		}else{
			yCb("Argument type error!")
		}
		
	}else{
		yCb("Function argument missed!")
	}
	
}

exports.bing = function ( bQuery, bPage, bCb ){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// bing search can be start :)
			var bGelen = "" 
			
			for(b=0;b<=arguments[1];b++){	
				bAyarlar = {
					host: "www.bing.com",
					path: "/search?q="+arguments[0]+"&first="+b+"1&FORM=PERE"
				}
				http.request(bAyarlar,(res)=>{
					res.on("data",(d)=>{
						bGelen += d;
					})
					res.on("end",()=>{
						
						var bSon = bGelen.match(urlRegExp)
						bCb(bSon)
					})
				}).end()
				
			}
			
		}else{
			bCb("Argument type error!")
		}
		
	}else{
		bCb("Function argument missed!")
	}
	
}

