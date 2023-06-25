function parent(){
 var a=10

    function child(){
        console.log(a)
     }

     return child
}

let fucntionreceived=parent()
console.log(fucntionreceived)

// function outer(){
//     var x=10;
//     function inner(){
//         console.log(x);
//     }
// return inner
// }
// var closurefunc=outer();
// closurefunc();

// function add(x){
//     return function(y){
//         return function(z){
//             return x+y+z;
//         }
//     }
        
// }

// var result=add(2,3)(4);
// console.log(result);