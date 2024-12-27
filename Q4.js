for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j.toString())
    }
    for(let k=1;k<=(5-i)*2;k++){
        process.stdout.write(" ")
    }
    for(let m=i;m>=1;m--){
        process.stdout.write(m.toString());
    }
    console.log();
}
// 1        1   
// 12      21
// 123    321
// 1234  4321
// 1234554321