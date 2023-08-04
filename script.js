//MRF MER (MAP REDUCE FILTER)
//HOF- HIGHER ORDER FUCNCTION
const A =[1,2,3,4,5]
//M1
function double(ele){
    return ele*2
}
const output = A.map(double);
console.log(output);