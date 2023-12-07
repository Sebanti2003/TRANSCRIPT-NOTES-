function addtwo(num:number):number{
    return 2;
}
//in the above code only number type of data is returned
function getvalue(myval:number):string{
    if(myval>5){
        return "true";
    }
    return "false";
}

const gethello=(s:string):string=>{
    return ""
}



//here the function is taking a number as its arguments
//if we wanna include more than one datatype as a return type in function we can use union but we will look into it after some lessons.




//map method
const heroes=["superman","thor","spiderman"]
heroes.map((hero:string):string=>{
    return `the name of the hero is ${hero}`
})
export {}
