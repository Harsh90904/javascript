class studant {
     #name;
     #id;
     static IDConter = 1;
     static schoolName = "GBSC";
     

     constructor(name){
        this.#name = name;
        this.#id=  studant.IDConter++;
     }

     set setname(name){
        this.#name = name;
     }
     print(){
        console.log(`ID : ${this.#id}`);
        console.log(`Name : ${this.#name}`);
        console.log(`School : ${studant.schoolName}`);
     }
}
let s1 = new studant("Aman");
let s2 = new studant("rakesh");
let s3 = new studant("manish")
let allstu = Array([s1.print()],[s2.print()], [s3.print()]);

console.log(allstu);

