//MRF MER (MAP REDUCE FILTER)
//HOF- HIGHER ORDER FUCNCTION
const A =[1,2,3,4,5]
//M1
function double(ele){
    return ele*2
}
const output = A.map(double);
console.log(output);
//M2
const op = A.map(function(x){
    return x*3;
})
console.log(op);
//M3
const o = A.map((x)=>x*4)
console.log(o);