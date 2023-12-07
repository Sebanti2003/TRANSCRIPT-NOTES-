class Classone{
    private name:string;
    private email:string;
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
    public display=():void=>{
        console.log(this.name,this.email)
    }
}
const c1=new Classone("h@h.com","sebanti");
c1.display();
