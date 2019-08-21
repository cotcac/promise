var q = require("q");

var a =  function(){
    return q.Promise(function(resolve, reject, notify){
        var percentage = 0;
        var interval = setInterval(function() {
            percentage += 20;                
            notify(percentage);
            if (percentage === 100) {
                resolve("a");
                clearInterval(interval);
           }
        }, 500);
    });
};

function errorHandler(err) {
  console.log('Error Handler:', err);
}

var master = a();

master
.progress(function(p){
    console.log(p);
    
})
.then(function(res) {
    console.log(res);
})
.catch( function(err){
    console.log(err);
    
})
