
const Q = require('q');
var promise = function(check) {
    return Q.promise(function(resolve, reject,notify) {
        if (check) {
            resolve("Resolve it"); 
        } else {
            reject("Error");
        }
    });
};

promise(true).then(function(data) {
    console.log(data);
}, function(error) {
     console.log(error);
});