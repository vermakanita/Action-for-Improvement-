let st=0;

let  lt = 1;
let nt = st+lt;
process.stdout.write(st.toString()+" ");
process.stdout.write(lt.toString()+" ");
process.stdout.write(nt.toString()+" ");
for(let i=0;i<=10;i++){
    process.stdout.write(nt.toString()+" ");
    st=lt;
    lt=nt;
    nt=st+lt;
}