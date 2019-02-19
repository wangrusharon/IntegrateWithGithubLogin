var code= getUrlVars(window.location.href.slice(window.location.href.indexOf('?') + 1))["code"];
authcallback();

function authcallback(){

 var posturl= "https://github.com/login/oauth/access_token?client_id=82daee2e3ed9c08b31a0&client_secret=d87a1ce0297ce9f140cda713874e93790cbdb1ef&code="+code;
 
 $.post(posturl,function(data,status){
        var accessToken=getUrlVars(data)["access_token"];
        var accesstokenurl="https://github.com/api/v3/user?access_token="+accessToken;
        $.getJSON(accesstokenurl,function(adata,astatus){
           console.log(adata);
           $("#user").html(adata);
    });

    });
}


function getUrlVars(str)  
{  
    var vars = [], hash;  
    var hashes =str.split('&');  
    for(var i = 0; i < hashes.length; i++)  
    {  
        hash = hashes[i].split('=');  
        vars.push(hash[0]);  
        vars[hash[0]] = hash[1];  
    }  
    return vars;  
}  
