// let n=10;
// 10 to 20 
// for(let i=11;i<=20;i++){
//     let s=true;
//     for(let j=2;j<i;j++){
//         if(i%j===0){
//             s=false;
//             break;
//         }}
//         if(s){
//             // process.stdout.write(i.toString()+" ")
//             console.log(i)
//         }
       
//     }

let n=9;
let p=true;
for(let i=2;i<n;i++){
    if(i%n==0){  
        p=false;
        break;
    }
}
if(p){
    console.log(n)
}


