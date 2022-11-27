let args =process.argv;
let opeartion =args[2]
let arr=[]
let ans=0;

if(opeartion=="add")
{
    for(let i=3;i<args.length;i++){
    ans+=Number(args[i])
     }
}

else if(opeartion=="sub"){
    ans=args[3]
    for(let i=4;i<args.length;i++){
        ans-=Number(args[i])
         }
}
else if(opeartion=="mul"){
    ans=args[3]
    for(let i=4;i<args.length;i++){
        ans*=Number(args[i])
         }
}
else if(opeartion=="divide"){
    ans=args[3]
    for(let i=4;i<args.length;i++){
        ans/=Number(args[i])
         }
}
else if(opeartion=="sin"){
    ans=Math.sin(args[3]*Math.PI/180)
}

else if(opeartion=="cos"){
    ans=Math.cos(args[3]*Math.PI/180)
}

else if(opeartion=="tan"){
    ans=Math.tan(args[3]*Math.PI/180)
}


else if(opeartion=="random"){
    ans=Math.random()
}
console.log(ans)