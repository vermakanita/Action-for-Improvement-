// let s="hello";
// let s2 = "hellott";
// let obj={};
// let obj2={};
// let arr1=s.split("");
// // console.log(arr1)
// let arr2=s.split("");
// for(let i=0;i<arr1.length;i++){
//     let ele= arr1[i]
//     if(!obj[ele]){
//         obj[ele]=1
//     }
//     else{
//         obj[ele]=obj[ele]+1;
//     }
// }
// // console.log(obj);

// for(let j=0;j<arr2.length;j++){
//       let ele = arr2[j];
//       if(!obj2[ele]){
//         obj2[ele]=1;
//       }
//       else{
//         obj2[ele]=obj2[ele]+1
//       }
// }


// let isAnagram =true;
// for(let key in obj){
//     if(obj[key]!==obj2[key]){
//         isAnagram = false;
//         break;
//     }
// }


// // let isAnagram = true;
// // if(!obj.length==obj2.length){
// //     isAnagram = false;
// // }
// // else{

// // for(let k=0;k<obj.length;k++){
// // if(obj[k]==obj2[k]){
// //     let ele = obj[k]
// //     if(obj[ele]!==obj2[key]){
// //         isAnagram=false;
// //         break;
// //     }
// // }
 
// // }
 
// // }

// if(isAnagram){
//     console.log("Anagram")
// }
// else{
//     console.log("not anagram ")
// }
let s = "helle";
let s2 = "hello";
let obj = {};
let obj2 = {};
let arr1 = s.split("");
let arr2 = s2.split("");

for (let i = 0; i < arr1.length; i++) {
    let ele = arr1[i];
    if (!obj[ele]) {
        obj[ele] = 1;
    } else {
        obj[ele] = obj[ele] + 1;
    }
}

for (let j = 0; j < arr2.length; j++) {
    let ele = arr2[j];
    if (!obj2[ele]) {
        obj2[ele] = 1;
    } else {
        obj2[ele] = obj2[ele] + 1;
    }
}

let isAnagram = true;
let keys1 = Object.keys(obj);
let keys2 = Object.keys(obj2);

if (keys1.length !== keys2.length) {
    isAnagram = false;
} else {
    for (let k = 0; k < keys1.length; k++) {
        let key = keys1[k];
        if (obj[key] !== obj2[key]) {
            isAnagram = false;
            break;
        }
    }
}

if (isAnagram) {
    console.log("anagram");
} else {
    console.log("not anagram");
}