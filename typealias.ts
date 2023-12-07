type user={
   readonly name:string,//it can be only written once it cant be changed
    numberel:number,
    yoyo:boolean,
    creditdetails?:number//optional parameter we can also skip this if we want
}
const func=(user:user):user=>{
    return {name:"sebanti",numberel:34,yoyo:true}
}
const people=func({name:"sebanti",numberel:34,yoyo:true});
console.log(people);








//now to combine the two types we can use 
type userdetails=user&{
    cvv:number
}
const funcc=(user:userdetails):userdetails=>{
    const obj:userdetails={name:"sebanti",numberel:34,yoyo:true,cvv:34}
    return obj
}
const peoplee=funcc({name:"sebanti",numberel:34,yoyo:true,cvv:33});
console.log(peoplee);

export {}