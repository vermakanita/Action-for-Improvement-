
let n=5;
for(let i=1;i<=n;i++){
    for(let j=n; j>=i;j--){
        process.stdout.write(" ")
    }
    let p=1;
    for(let k=1;k<=i;k++){
        process.stdout.write(p.toString()+" ");
        p = (p*(i-k)/k)
    }
    console.log()
}