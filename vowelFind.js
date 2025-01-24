function vovel (str){
    let result = str.toLowerCase();
    let c=0;
    for(let i=0;i<result.length;i++){
        if(result[i][0]=='a'||result[i][0]=='e'||result[i][0]=='i'||result[i]=='o'||result[i]=='u'){
            c++;
        }
    }
    return console.log(c);

}


vovel("you need to work hard itudent")