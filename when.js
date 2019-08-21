const Q = require('q');

function boo(){
    return Q.when()
    .then(function(){
        return '[x] ';
    })
    .then(function(res){
        return res + '[y]'
    })
    .catch(function(err){
        console.log(err);
        return false;
        
    })
    
}

boo().then(result =>{
    console.log(result); // [x] [y]
    
})
