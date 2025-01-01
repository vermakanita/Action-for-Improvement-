let arr1=[
           ['l','b','c'],
           ['a','g','s'],
           ['g','y','a']
         ]
let obj={};
let arr2=arr1.flat();

for(let i=0;i<arr2.length;i++){
    let ele=arr2[i];
    
    if(!obj[ele]){
        obj[ele]=1
    }
    else{
        obj[ele]=obj[ele]+1;
    }
}
console.log(obj)