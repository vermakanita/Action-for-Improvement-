// // let a = "listen";
// // let b=  "silenl";
// // let c=[];
// // if(a.length===b.length){
// //     for(let i=0;i<a.length;i++){
// //         for(let j=0;j<b.length;j++){
// //             if(a[i]===b[j]){
                 

// //                 c.push(b[j]);
// //             }
        
// //         }
// //     }
// //     if (b.length===c.length){
         

// //         console.log("string is a anagram ")
// //     }
// //     else{
// //         console.log("string is not anagram onlt length is same ")
// //     }

// // }
// // else{
// //     console.log("string is not a anagram")
// // }






// let a= "lesten";
// let b="silent";
// let c=[];
// if(a.length===b.length){
//     let chara={};
//     let charb={};
//     for(let i=0;i<a.length;i++){
//         chara[a[i]]=(chara[a[i]]||0)+1;
//         charb[b[i]]=(charb[b[i]]||0)+1;
//     }

//     let isAnagram = true;
//     for (let key in chara) {
//         if (chara[key] !== charb[key]) {
//             isAnagram = false;
//             break;
//         }
//     }

//     if (isAnagram) {
//         console.log("string is an anagram");
//     } else {
//         console.log("string is not an anagram, only length is same");
//     }
// } else {
//     console.log("string is not an anagram");
// }






// let s1="listen";
// let s2="silent";
// let s= true;

// let a1=s1.split("");
// let a2=s2.split("");
// console.log(a1);
// console.log(a2);
// a1.sort();
// a2.sort();
// for(let i=0;i<a1.length;i++){
//     if(a1[i]!=a2[i]){
//         s=false
//     }
// }

// if(s){
//     console.log("anagram");
    
// }
// else{
//     console.log("not anagram");
    
// }





// let s1="listen";
// let s2="silenl ";
// let s= true;

// let a1=s1.split("");
// let a2=s2.split("");
// console.log(a1);
// console.log(a2);
// a1.sort();
// a2.sort();
// for(let i=0;i<a1.length;i++){
//     if(a1[i]!=a2[i]){ 
//         s=false
//     }
// }

// if(s){
//     console.log("anagram");
    
// }
// else{
//     console.log("not anagram");
    
// }


let s1= "listen";
let  s2="silent";
let r=true;

let a1= s1.split("")
let a2= s2.split("");

a1.sort();
a2.sort();


for(let i=0;i<a1.length;i++){
    for(let j=0;j<a2.length;j++){
       if(a1[i]!=a2[j]){
        r=false;
          
       } 
    }
}
if(r){
    console.log("anagaram")
}
else{

    console.log("noy anagram")
}

