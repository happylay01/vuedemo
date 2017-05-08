/**
 * Created by ljt on 2017/5/8.
 */

function a(a){
    a^ = (1 << 4)-1;
    return a;
}

a(10);


var myObject = {
    foo:"bar",
    func:function(){
      var self = this;
      console.log(this.foo);
      console.log(self.foo);
        (function(){
           console.log(this.foo);
           console.log(self.foo);
        }())
    }
};
myObject.func();


var students = [
    {id:1,name:"bill",src:"xxx.jpg"},
    {id:2,name:"bob",src:"yyy.jpg"},
    {id:3,name:"tom",src:"zzz.jpg"}
];


var arr = [1,1,2,3,4,4,4,46];
function oSort(arr) {
    var result ={};
    var newArr=[];
    for(var i=0;i<arr.length;i++) {
        if(!result[arr[i]]) {
            newArr.push(arr[i])
            result[arr[i]]=1;
        }
    }
    return newArr
}

oSort(arr)