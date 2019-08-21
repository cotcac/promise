
const Q = require('q');
//Bạn có thể sử dụng Q.fcall để tạo ra một Promise từ một hàm trả về một giá trị cố định.
var promise = Q.fcall(function () {
    return "Fixed value";
});

promise.then(function(data) {
    console.log(data);
}, function(error) {
     console.log(error);
});