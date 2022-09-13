let str="naman"
let b="";
for(let i=str.length-1; i>=0; i--){
    b=b+str[i]
}
if(str==b){
    console.log("No")
}else{
    console.log("Yes")
}