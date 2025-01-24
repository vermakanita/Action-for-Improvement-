function l(a){
    let res = a.split(" ");
    let max=""
    for(let i=0;i<res.length;i++){
        if(max.length<res[i].length){
            // let t = max;
            max=res[i];
            // res[i]=t;
        }
         
    }
    // return console.log(res[0]);
    return max;
}let r=l ("you need to work hard student ");
console.log(r);
 