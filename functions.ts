//in the case of function the type reference from earlier is really important and nessessary
function addtwo(num){
    return num+2;
}
addtwo(5);//any is a problem in typescript

function addtwoo(num:number){
    return num+2;
}
addtwoo(5);// now it is automatically returning an number type of data

function signup(
    name:string,
    email:string,
    password:number,
    func=():void=>{}  
){}
// signup(1,2,3);//it will show problem
function signupp(
    name:string,
    email:string,
    password:number=3
){

}
//it means that we are setting a default value of password whenever we are using the function signupp so if any avoidance occurs at any place by mistake then it will be not considered as a error .






export {}